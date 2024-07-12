package main

import (
	"context"
	"encoding/json"
	"errors"
	"kilo-bravo/internal/data"
	"net/http"
)

type jsonResponse struct {
    Error    bool        `json:"error"`
    Message  string      `json:"message"`
    Data     interface{} `json:"data,omitempty"`
}

type envelope map[string]interface{}

// Handler to process the Google OAuth callback
func (app *application) HandleGoogleCallback(response http.ResponseWriter, request *http.Request) {
	app.infoLog.Println("Handling Google OAuth callback")

	code := request.URL.Query().Get("code")
	if code == "" {
		app.errorLog.Println("Code not found in request")
		http.Error(response, "Code not found in request", http.StatusBadRequest)
		return
	}

	app.infoLog.Printf("Received code: %s", code)

	token, err := app.googleOauthConfig.Exchange(context.Background(), code)
	if err != nil {
		app.errorLog.Printf("Error exchanging code for token: %v", err)
		http.Error(response, "Error exchanging code for token", http.StatusInternalServerError)
		return
	}

	client := app.googleOauthConfig.Client(context.Background(), token)
	userInfoResponse, err := client.Get("https://www.googleapis.com/oauth2/v2/userinfo")
	if err != nil {
		app.errorLog.Printf("Error getting user info %v", err)
		http.Error(response, "Error getting user info", http.StatusInternalServerError)
		return
	}

	defer userInfoResponse.Body.Close()

	var userInfo struct {
		Id    string `json:"id"`
		Email string `json:"email"`
		Name  string `json:"name"`
	}

	// Decode response
	if err := json.NewDecoder(userInfoResponse.Body).Decode(&userInfo); err != nil {
		app.errorLog.Printf("Error decoding user info response: %v", err)
		http.Error(response, "Error decoding user info response", http.StatusInternalServerError)
		return
	}

	app.infoLog.Printf("User info received! - %+v", userInfo)

	firstName, lastName := splitFullName(userInfo.Name)

	// Save tokens + user info
	user := data.User{
		Email:     userInfo.Email,
		FirstName: firstName,
		LastName:  lastName,
	}
	userId, err := app.models.User.Insert(user)
	if err != nil {
		app.errorLog.Printf("Error adding user to db: %v", err)
		http.Error(response, "Error adding user to db", http.StatusInternalServerError)
		return
	}

	tokenRecord := data.Token{
		UserID:       userId,
		RefreshToken: token.RefreshToken,
		TokenExpiry:  token.Expiry,
	}

	if err := app.models.Token.Insert(tokenRecord); err != nil {
		app.errorLog.Printf("Error adding token to db %v", err)
		http.Error(response, "Error inserting token", http.StatusInternalServerError)
		return
	}

	app.infoLog.Printf("User and tokens stored successfully")

	// Redirect to the frontend application
	frontendURL := "http://localhost:5173/library"
	http.Redirect(response, request, frontendURL, http.StatusSeeOther)
}


func (app *application) Logout(response http.ResponseWriter, request *http.Request) {
    var requestPayload struct {
        Token string `json:"token"`
    }

    err := app.readJSON(response, request, &requestPayload)
    if err != nil {
        app.errorJSON(response, errors.New("invalid JSON"))
        return
    }

    err = app.models.Token.DeleteByToken(requestPayload.Token)
    if err != nil {
        app.errorJSON(response, errors.New("invalid JSON - failed to delete token"))
        return
    }

    payload := jsonResponse{
        Error:   false,
        Message: "logged out",
    }

    _ = app.writeJSON(response, http.StatusOK, payload)
}
