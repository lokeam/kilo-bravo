package main

import (
	"fmt"
	"kilo-bravo/internal/data"
	"kilo-bravo/internal/driver"
	"log"
	"net/http"
	"os"
	"path/filepath"

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
	ex, err := os.Executable()
	if err != nil {
		log.Fatal(err)
	}
	dir := filepath.Dir(ex)
	rootDir := findRootDir(dir)

	// Construct the path to the .env file relative to the main.go location
	envPath := filepath.Join(rootDir, ".env")
	fmt.Println("Attempting to load .env file from:", envPath) // Debug print

	if err := godotenv.Load(envPath); err != nil {
		log.Fatalf("Error loading .env file from %s: %v", envPath, err)
	}

	// Verify environment variables
	fmt.Println("GOOGLE_CLIENT_ID:", os.Getenv("GOOGLE_CLIENT_ID"))
	fmt.Println("GOOGLE_CLIENT_SECRET:", os.Getenv("GOOGLE_CLIENT_SECRET"))
	fmt.Println("GOOGLE_REDIRECT_URI:", os.Getenv("GOOGLE_REDIRECT_URI"))
	fmt.Println("DSN:", os.Getenv("DSN"))
}

func findRootDir(currentDir string) string {
	for {
		if _, err := os.Stat(filepath.Join(currentDir, ".env")); err == nil {
			return currentDir
		}
		parentDir := filepath.Dir(currentDir)
		if parentDir == currentDir {
			log.Fatal("Could not find .env file in any parent directory")
		}
		currentDir = parentDir
	}
}

func main() {
	var cfg config
	cfg.port = 8081

	infoLog := log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)
	errorLog := log.New(os.Stderr, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile) // Changed to os.Stderr for error logging

	dataSrcName := os.Getenv("DSN")
	fmt.Println("-----------------------------")
	fmt.Println("DSN:", dataSrcName) // Print DSN for verification
	fmt.Println("DSN from environment:", os.Getenv("DSN"))

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
