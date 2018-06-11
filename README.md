# GoodReads App
This app gets books matching the search string.

This app has been developed using :

* React/Redux boiler plate 
* [axios]Promises to make aysncronous network calls.
* parse JSON data and generate model object from the data.
* use [redux-promise](https://github.com/acdlite/redux-promise) middleware for handling promises.
* [GoodReads](https://www.goodreads.com/api/) API to get matching books
* JEST framework for snapshot and unittestcases

###Getting Started###

Checkout this repo, install dependencies, then start webpack server with the following:

```
	> git clone https://github.com/mailanandkumarsingh/readbooks.git
	> cd readbooks
	> npm install
	> npm run dev
	> open browser - localhost:8080
	> npm run test(for unittestcases)
	> npm run test:coverage(for coverage)
```
