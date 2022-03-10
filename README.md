This is project for full stack web application testing.

- Has cypress e2e tests
- Jest and supertest for api tests
- k6 for api load testing

More details on Notes.md

## Getting started

Before getting started you will need Docker, Docker Compose and Node on your system.

- Clone this repo to your local machine
- Go to the `client` directory and run `npm install`
- Go to the `api` directory and run `npm install`
- Go to the root directory and run `docker-compose up`

This starts both the client and the server with automatic reloading when saving.

## Tests

Make sure that api and client servers are running. Use the following command to run them: `make build`

Running the API tests
To run the API tests locally, run the following command: `make api-tests-local`

To run the API tests on docker, run the following command: `make api-tests-docker`

Running the Cypress tests
To run the Cypress tests locally, run the following command: `make e2e-tests-local`

To run the Cypress tests on docker, run the following command: `make e2e-tests-docker`

Running the Api load tests
To run the load tests on docker, run the following command: `make load-tests-docker`
