gendiff:
	node gendiff.js
install:
	npm ci
lint:
	npx eslint
test:
	npx jest
test-coverage:
	npx jest --coverage