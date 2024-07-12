package main

import (
	"encoding/json"
	"errors"
	"io"
	"net/http"
	"strings"
)

func (app *application) readJSON(response http.ResponseWriter, request *http.Request,
	data interface{}) error {
		// Temporarily hardcode to 1MB
		maxBytes := 1048576

		request.Body = http.MaxBytesReader(response, request.Body, int64(maxBytes))

		decoder := json.NewDecoder(request.Body)
		err := decoder.Decode(data)
		if err != nil {
			return err
		}

		// Ensure body only has single JSON value
		err = decoder.Decode(&struct{}{})
		if err != io.EOF {
			return errors.New("request body must contain a single json value")
		}

		return nil
}

func (app *application) writeJSON(
	response http.ResponseWriter, status int, data interface{},
	headers ...http.Header) error {

		// Use json.Marshal in production
		out, err := json.MarshalIndent(data, "", "\t")
		if err != nil {
			return err
		}

		if len(headers) > 0 {
			for key, value := range headers[0] {
				response.Header()[key] = value
			}
		}

		response.Header().Set("Content-Type", "application/json")
		response.WriteHeader(status)
		_, err = response.Write(out)
		if err != nil {
			return err
		}

		return nil
}

func (app *application) errorJSON(response http.ResponseWriter, err error, status ...int) {
	statusCode := http.StatusBadRequest

	if len(status) > 0 {
		statusCode = status[0]
	}

	var customErr error
	switch {
	case strings.Contains(err.Error(), "SQLSTATE 23505"):
		customErr = errors.New("error - that value already exists in db")
		statusCode = http.StatusForbidden
	case strings.Contains(err.Error(), "SQLSTATE 22001"):
		customErr = errors.New("error - value you are trying to insert is too large")
		statusCode = http.StatusForbidden
	case strings.Contains(err.Error(), "SQLSTATE 23503"):
		customErr = errors.New("error - corresponding foreign key doesn't exist")
		statusCode = http.StatusForbidden
	default:
		customErr = err
	}

	var payload jsonResponse
	payload.Error = true
	payload.Message = customErr.Error()

	app.writeJSON(response, statusCode, payload)
}

// Helper function to split full name into first and last names
func splitFullName(fullName string) (string, string) {
	parts := strings.Fields(fullName)
	if len(parts) == 0 {
			return "", ""
	}
	firstName := parts[0]
	lastName := ""
	if len(parts) > 1 {
			lastName = strings.Join(parts[1:], " ")
	}
	return firstName, lastName
}