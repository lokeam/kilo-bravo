package main

import (
	"fmt"
	"kilo-bravo/internal/data"
	"kilo-bravo/internal/driver"
	"log"
	"net/http"
	"os"
)

type config struct {
	port int
}

type application struct {
	config		config
	errorLog 	*log.Logger
	infoLog 	*log.Logger
	models 		data.Models
}

func main () {
	var cfg config
	cfg.port = 8081

	infoLog := log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)
	errorLog := log.New(os.Stdout, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile)

	dataSrcName := os.Getenv("DSN")
	db, err := driver.ConnectPostgres(dataSrcName)
	if err != nil {
		log.Fatal("Cannot connect to database")
	}
	defer db.SQL.Close()


	app := &application{
		config: cfg,
		infoLog: infoLog,
		errorLog: errorLog,
		models: data.New(db.SQL),
	}

	err = app.serve()
	if err != nil {
		log.Fatal(err)
	}
}

func (app *application) serve() error {
	app.infoLog.Println("API listening on port", app.config.port)

	srv := &http.Server{
		Addr: fmt.Sprintf(":%d", app.config.port),
		Handler: app.routes(),
	}

	return srv.ListenAndServe()
}