package main

import (
	"fmt"
	"kilo-bravo/internal/data"
	"kilo-bravo/internal/driver"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

type config struct {
	port int
}

type application struct {
	config           config
	errorLog         *log.Logger
	infoLog          *log.Logger
	models           data.Models
	googleOauthConfig *oauth2.Config
}

// Load environment variables and verify them
func init() {
	// Load .env file
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}

	// Verify environment variables
	fmt.Println("GOOGLE_CLIENT_ID:", os.Getenv("GOOGLE_CLIENT_ID"))
	fmt.Println("GOOGLE_CLIENT_SECRET:", os.Getenv("GOOGLE_CLIENT_SECRET"))
	fmt.Println("GOOGLE_REDIRECT_URI:", os.Getenv("GOOGLE_REDIRECT_URI"))
}

func main() {
	var cfg config
	cfg.port = 8081

	infoLog := log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)
	errorLog := log.New(os.Stderr, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile) // Changed to os.Stderr for error logging

	dataSrcName := os.Getenv("DSN")
	db, err := driver.ConnectPostgres(dataSrcName)
	if err != nil {
		errorLog.Fatal("Cannot connect to database") // Use errorLog for logging errors
	}
	defer db.SQL.Close()

	googleOauthConfig := &oauth2.Config{
		RedirectURL:  os.Getenv("GOOGLE_REDIRECT_URI"),
		ClientID:     os.Getenv("GOOGLE_CLIENT_ID"),
		ClientSecret: os.Getenv("GOOGLE_CLIENT_SECRET"),
		Scopes:       []string{"https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"},
		Endpoint:     google.Endpoint,
	}

	// Log the OAuth2 configuration for debugging
	infoLog.Printf("Google OAuth2 Config: %+v", googleOauthConfig)

	app := &application{
		config:           cfg,
		infoLog:          infoLog,
		errorLog:         errorLog,
		models:           data.New(db.SQL),
		googleOauthConfig: googleOauthConfig,
	}

	err = app.serve()
	if err != nil {
		errorLog.Fatal(err) // Use errorLog for logging errors
	}
}

func (app *application) serve() error {
	app.infoLog.Println("API listening on port", app.config.port)

	srv := &http.Server{
		Addr:     fmt.Sprintf(":%d", app.config.port),
		Handler:  app.routes(),
		ErrorLog: app.errorLog, // Add custom error log to HTTP server
	}

	return srv.ListenAndServe()
}
