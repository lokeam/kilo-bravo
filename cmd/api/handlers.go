package main

import (
	"net/http"
)

type jsonResponse struct {
	Error 		bool		  	`json:"error"`
	Message		string	  	`json:"message"`
	Data			interface{}	`json:"data"`
}

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

	// send back response
	payload.Error = false
	payload.Message = "Signed in"

	err = app.writeJSON(response, http.StatusOK, payload)

	if err != nil {
		app.errorLog.Println(err)
	}
}