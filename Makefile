DSN="host=localhost port=6543 user=postgres password=password dbname=kbapi sslmode=disable timezone=UTC connect_timeout=5"
BINARY_NAME=kbapi

## build: Build binary
build:
	@echo "Building BE..."
	go build -o ${BINARY_NAME} ./cmd/api/
	@echo "Binary built!"

## run: builds + runs app
run: build
	@echo "Starting BE..."
	@env DSN=${DSN} ./${BINARY_NAME} 2>&1 | tee backend.log
	@echo "BE started!"

## clean: runs go clean + deletes binaries
clean:
	@echo "Cleaning..."
	@go clean
	@rm ${BINARY_NAME}
	@echo "Cleaned!"

## start: run alias
start: build
	@echo "Loading environment variables..."
	@export $$(cat .env | xargs) && ./$(BINARY_NAME) 2>&1 | tee backend.log

## stop: stops the currently running app
stop:
	@echo "Stopping BE..."
	@-pkill -SIGTERM -f "./${BINARY_NAME}"
	@echo "Stopped BE!"

## restart: stops + starts running app
restart: stop start

## help: print this help message
.PHONY: help
help:
	@echo 'Usage:'
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/ /'
