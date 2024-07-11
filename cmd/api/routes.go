package main

import (
	"context"
	"encoding/json"
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

	mux.Post("/users/login", app.Login)

	mux.Post("/users/logout", app.Logout)

	mux.Post("/auth/oauth/callback", app.HandleGoogleCallback) // Add this line for the OAuth callback

	mux.Get("/users/all", func(response http.ResponseWriter, request *http.Request) {
		var users data.User
		all, err := users.GetAll()
		if err != nil {
			app.errorLog.Println(err)
			return
		}

		payload := jsonResponse{
			Error: false,
			Message: "success",
			Data: envelope{"users": all},
		}

		app.writeJSON(response, http.StatusOK, payload)
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


// Handler to process the Google OAuth callback
func (app *application) HandleGoogleCallback(w http.ResponseWriter, r *http.Request) {
	app.infoLog.Println("Handling Google OAuth callback")

	var req struct {
		Code string `json:"code"`
	}

	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		app.errorLog.Printf("Error decoding request body: %v", err)
		http.Error(w, "Error decoding request body", http.StatusBadRequest)
		return
	}

	app.infoLog.Printf("Received code: %s", req.Code)

	token, err := app.googleOauthConfig.Exchange(context.Background(), req.Code)
	if err != nil {
		app.errorLog.Printf("Error exchanging code for token: %v", err)
		http.Error(w, "Error exchanging code for token", http.StatusInternalServerError)
		return
	}

	client := app.googleOauthConfig.Client(context.Background(), token)
	userInfoResponse, err := client.Get("https://www.googleapis.com/oauth2/v2/userinfo")
	if err != nil {
		app.errorLog.Printf("Error getting user info: %v", err)
		http.Error(w, "Error getting user info", http.StatusInternalServerError)
		return
	}

	defer userInfoResponse.Body.Close()
	var userInfo struct {
		Id    string `json:"id"`
		Email string `json:"email"`
		Name  string `json:"name"`
	}

	if err := json.NewDecoder(userInfoResponse.Body).Decode(&userInfo); err != nil {
		app.errorLog.Printf("Error decoding user info response: %v", err)
		http.Error(w, "Error decoding user info response", http.StatusInternalServerError)
		return
	}

	app.infoLog.Printf("User info received: %+v", userInfo)

	response := struct {
		UserId       string `json:"userId"`
		AccessToken  string `json:"accessToken"`
		RefreshToken string `json:"refreshToken"`
	}{
		UserId:       userInfo.Id,
		AccessToken:  token.AccessToken,
		RefreshToken: token.RefreshToken,
	}

	app.infoLog.Printf("Sending response: %+v", response)

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(response); err != nil {
		app.errorLog.Printf("Error encoding response: %v", err)
		http.Error(w, "Error encoding response", http.StatusInternalServerError)
	}
}