package main

import (
	"kilo-bravo/internal/data"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
)

func (app *application) routes() http.Handler {
	mux := chi.NewRouter()
	mux.Use(middleware.Recoverer)
	mux.Use(cors.Handler(cors.Options{
		AllowedOrigins: []string{"https://*", "http://*"},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders: []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders: []string{"Link"},
		AllowCredentials: false,
		MaxAge: 300,
	}))

	mux.Get("/users/login", app.Login)
	mux.Post("/users/login", app.Login)

	mux.Get("/users/all", func(response http.ResponseWriter, request *http.Request) {
		var users data.User
		all, err := users.GetAll()
		if err != nil {
			app.errorLog.Println(err)
			return
		}

		app.writeJSON(response, http.StatusOK, all)
	})

	return mux
}