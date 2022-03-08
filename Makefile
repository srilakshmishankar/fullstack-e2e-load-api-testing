build:
	docker compose up  --remove-orphans

e2e-tests-local:
	cd cypress && npm run wait:servers && npm test

e2e-tests-docker:
	docker run -it --network=host -v $$PWD:/e2e -w /e2e --entrypoint cypress cypress/included:9.3.0 run --config CYPRESS_baseurl=http://client:3000/

api-tests-docker:
	cd api-tests && npm run wait:server && docker-compose up

api-tests-local	:
	cd api-tests && npm run wait:server && npm test

load-tests-docker:
	cd load-tests && npm run wait:server && docker-compose up
