# Tests for FreeCiv Project

Tests are fully compatible with the TUIF version 0.1.0.

## How to Run Tests

1. Clone the project. `cd` to this folder (`cd freeCivLadder`) and from this folder run:

```javascript
npm install
```

2. to run all the test suits run:

```javascript
npm test
```

3. to create an `allure HTML report` copy pom.xml from `./node-modules/jasmine-allure-reporter` to the tests project root folder
4. run:

```javascript
npm run report
```

## How to Run Tests Headlessly
To run tests on linux machine without X you should first install `xvfb` (X virtual framebuffer) and `Chrome browser`.
Start the tests with:

```javascript
xvfb-run --server-args="-screen 0 1024x768x24" npm test
```
