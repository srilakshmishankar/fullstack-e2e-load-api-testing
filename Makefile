build:
	docker compose up  --remove-orphans

e2e-test-docker-local:
	cd cypress && npm run wait:servers && npm test

api-test-docker-local:
	npm run wait:server && npm test

load-test-docker-local:
	cd load-tests && npm run wait:server && docker-compose up
