package main

import (
	"kilo-bravo/internal/data"
	"net/http"
	"time"

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

	mux.Get("/users/add", func (response http.ResponseWriter, request *http.Request)  {
		var u = data.User{
			Email: "sampleexample@test.com",
			FirstName: "Sample",
			LastName: "Example",
			Password: "password",
		}

		app.infoLog.Println("Adding User...")

		id, err := app.models.User.Insert(u)
		if err != nil {
			app.errorLog.Println(err)
			app.errorJSON(response, err, http.StatusForbidden)
			return
		}

		app.infoLog.Println("Fetched user with id of: ", id)
		newUser, _ := app.models.User.GetByUserId(id)
		app.writeJSON(response, http.StatusOK, newUser)
	})

	mux.Get("/test-generate-token", func(response http.ResponseWriter, request *http.Request) {
		token, err := app.models.User.Token.GenerateToken(2, 60 * time.Minute)
		if err != nil {
			app.errorLog.Println(err)
			return
		}

		token.Email = "updatedEmail@example.com"
		token.CreatedAt = time.Now()
		token.UpdatedAt = time.Now()

		payload := jsonResponse {
			Error: false,
			Message: "success",
			Data: token,
		}

		app.writeJSON(response, http.StatusOK, payload)
	})


	mux.Get("/test-save-token", func(response http.ResponseWriter, request *http.Request) {
		token, err := app.models.User.Token.GenerateToken(2, 60 * time.Minute)
		if err != nil {
			app.errorLog.Println(err)
			return
		}

		user, err := app.models.User.GetByUserId(2)
		if err != nil {
			app.errorLog.Println(err)
			return
		}

		token.UserID = user.ID
		token.CreatedAt = time.Now()
		token.UpdatedAt = time.Now()

		err = token.Insert(*token, *user)
		if err != nil {
			app.errorLog.Println(err)
			return
		}

		payload := jsonResponse {
			Error: false,
			Message: "success",
			Data: token,
		}

		app.writeJSON(response, http.StatusOK, payload)
	})

	mux.Get("/test-validate-token", func(response http.ResponseWriter, request *http.Request) {
		tokenToValidate := request.URL.Query().Get("token")
		valid, err := app.models.Token.ValidToken(tokenToValidate)
		if err != nil {
			app.errorJSON(response, err)
			return
		}

		var payload jsonResponse
		payload.Error = false
		payload.Data = valid

		app.writeJSON(response, http.StatusOK, payload)
	})

	return mux
}