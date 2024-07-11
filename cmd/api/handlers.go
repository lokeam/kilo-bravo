package main

import (
	"errors"
	"net/http"
	"time"
)

type jsonResponse struct {
	Error 		bool		  	`json:"error"`
	Message		string	  	`json:"message"`
	Data			interface{}	`json:"data,omitempty"`
}

type envelope map[string]interface{}

func (app *application) Login(response http.ResponseWriter, request *http.Request) {
	type credentials struct {
		UserName 	string		`json:"email"`
		Password 	string		`json:"password"`
	}

	var creds credentials
	var payload jsonResponse

	err := app.readJSON(response, request, &creds)
	if err != nil {
		app.errorLog.Println(err)
		payload.Error = true
		payload.Message = "missing or invalid json"
		_ = app.writeJSON(response, http.StatusBadRequest, payload)
	}

	// Authenticate
	app.infoLog.Println(creds.UserName, creds.Password)

	// lookup user by email
	user, err := app.models.User.GetByEmail(creds.UserName)
	if err != nil {
		app.errorJSON(response, errors.New("invalid username or password"))
		return
	}

	// validate user pw
	validPassword, err := user.PasswordMatches(creds.Password)
	if err != nil || !validPassword {
		app.errorJSON(response, errors.New("invalid username or password"))
		return
	}

	// if valid, generate token
	token, err := app.models.Token.GenerateToken(user.ID, 24 * time.Hour)
	if err != nil {
		app.errorJSON(response, err)
		return
	}

	// save to db
	err = app.models.Token.Insert(*token, *user)
	if err != nil {
		app.errorJSON(response, err)
		return
	}

	// send back res
	payload = jsonResponse{
		Error: false,
		Message: "logged in",
		Data: envelope{"token": token},
	}

	err = app.writeJSON(response, http.StatusOK, payload)
	if err != nil {
		app.errorLog.Println(err)
	}
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
		app.errorJSON(response, errors.New("invalid JSON"))
		return
	}

	payload := jsonResponse{
		Error: false,
		Message: "logged out",
	}

	_ = app.writeJSON(response, http.StatusOK, payload)
}