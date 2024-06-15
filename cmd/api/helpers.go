package main

import (
	"encoding/json"
	"errors"
	"io"
	"net/http"
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