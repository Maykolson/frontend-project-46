gendiff:
	node gendiff.js
install:
	npm ci
lint:
	npx eslint
test:
	npx jest
coverage:
	npx jest --coverage