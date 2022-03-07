build:
	docker compose up  --remove-orphans

e2e-test-docker-local:
	docker run -it --network=host -v $PWD:/e2e -w /e2e --entrypoint cypress cypress/included:9.3.0 run --config CYPRESS_baseurl=http://client:3000/


