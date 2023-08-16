Contents:

1. Purpose of the project
2. Framework Introduction
3. Framework structure
4. Installation and Usage. 

## Purpose of the project
 
The purpose for this project is to serve a technical implementation guideline for automation testing.This framework created as a part of the challenge to facilitate the API test.

The project also consider most important factors during automation test:
- Separtate test data from test iself
- switch tests on differnt environment
- 

## Framework Introduction
 
### why mocha  and supertest

SuperTest
SuperTest provides a high-level abstraction for testing HTTP requests - perfect for APIs. If you have a Node.js application that runs an HTTP server (like an Express application), you can make requests using SuperTest directly without needing a running server. One of the nice things about SuperTest is that while it can run tests without any additional tools, it can integrate nicely with other testing frameworks, as you'll see next.

Mocha
One of the better-known JavaScript testing frameworks, Mocha runs on both Node.js and the browser, making it useful for testing asynchronous functionality. One of the cool things about Mocha is it allows you to write your tests in different styles like BDD (it, describe, etc.) and TDD (suite, test, etc.). Mocha fits in nicely with SuperTest, helping you organize your tests in your team's preferred way.

Chai
Chai is an assertion library that you can pair with other testing frameworks like Mocha. While not strictly necessary for writing a test suite, it provides a more expressive and readable style for your tests. Like Mocha, Chai allows you to choose BDD-style (expect) or TDD-style (assert) assertions so that you can combine the library with most frameworks without any clashes.

Using these three tools, you can create a fast, stable, and maintainable automated test suite for your APIs with little effort.

 
### Framework structure
 
There are different folder for different purpose here.
1. **config**      :- This will be used to set configuration for   API test individually.

		envirionmentConfig.json - all required configurations for api automation are added under this file. 
3. **logs**    :- This will be used to add required test data files.
4. **reports**  :- After execution of test, results will get generate under Report . There will be one file with test-results.json to see result in json format. I 
5. **utils**    :- This folder will be used to helper the API test. For examples: hooks and helpers.
6. **test**     :- All test will be taken care from this location.   
7. **testdata**:- All test data will be gotten from this folder when need DDT.  
8. **assets**  : - screenshots for the test reports - mochawesome

### Talking more about the Scenarios Covered in this project:

- I have covered, `GET`, `POST`, `PUT`, `PATCH` and `DELETE` requests. You will find the example code in the test folder of the repository.

- [Mochawesome reporter][mochawesome-wevbsite] is used to generate the reports and show summary of the tests. I found it quite useful report as it shows the test description alongwith the tests and the time taken to run the tests.  

## Installation and execution
 
### Installation
1. Install node from https://nodejs.org/en/download/.

2. Use `npm` package manager and install required dependency.

		npm install

### execution

To run existed  Test which is under  /test
		
	npm run test
	
	For generating the mochawesome report, run the command 
     `npm run report` _(Check Package.json for more details.)_ It will generate and export the report in `mochawesome-report` folder from which you can open the `index.html` file to view the report.
### How to add new tests

To add new tests ,follow the below steps:
1. create a test file inside test
2. create a test data file if necessary

### Future enhancements and improvements

1. organize tests by suites and hooks
2. use logger generater to save logs.