## Nightwatch and Selenium test suite for Binary Next-Gen

We use this tool to protect against stability regression defects and to ensure cross-browser compatibility.

In order to run the tests locally, you have to have Selenium server running on your machine.

To install and run Selenium, install via NPM:

	npm install selenium-standalone -g
In project directory, run the following to install selenium dependencies:

	selenium-standalone install

To start selenium, run:

	selenium-standalone start

Once selenium is running, you will need to open another terminal to run your nightwatch tests. Assuming you have next-gen running in http://localhost:3000, you can execute all nightwatch tests via:

	nightwatch

To run a specific test (all tests are located in `tests/`):

	nightwatch -t tests/account.js

Run all tests via BrowserStack

	grunt bs

Which is equivalent to:

	nightwatch -env browserstack -g tests/pom

## Parallel & Cross Browser Testing

To run parallel tests in browserstack:

	grunt pom

Which is equivalent to:

	nightwatch -env account_bs,myaccount_bs,cashier_bs,resources_bs,trading_bs

To run all tests across different browsers and platforms in browserstack:

	grunt cb

Which is equivalent to:

	nightwatch -env firefox,chrome,ie,android,ios -g tests/pom



### Read more at [Nightwatch Test Runner](http://nightwatchjs.org/guide#test-runner)
