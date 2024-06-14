package main

import (
	"encoding/json"
	"net/http"
)

type jsonResponse struct {
	Error 		bool		`json:"error"`
	Message		string	`json:"message"`
}

func (app *application) Login(response http.ResponseWriter, request *http.Request) {
	type credentials struct {
		UserName 	string		`json:"email"`
		Password 	string		`json:"password"`
	}

	var creds credentials
	var payload jsonResponse

	err := json.NewDecoder(request.Body).Decode(&creds)
	if err != nil {
		// Throw err msg
		app.errorLog.Println("invalid json")
		payload.Error = true
		payload.Message = "invalid json"

		out, err := json.MarshalIndent(payload, "", "\t")

		if err != nil {
			app.errorLog.Println(err)
		}

		response.Header().Set("Content-Type", "application/json")
		response.WriteHeader(http.StatusOK)
		response.Write(out)
		return
	}
	// Authenticate
	app.infoLog.Println(creds.UserName, creds.Password)

	// send back response
	payload.Error = false
	payload.Message = "Signed in"

	out, err := json.MarshalIndent(payload, "", "\t")

	if err != nil {
		app.errorLog.Println(err)
	}

	response.Header().Set("Content-Type", "application/json")
	response.WriteHeader(http.StatusOK)
	response.Write(out)


}