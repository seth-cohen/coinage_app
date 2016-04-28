# Coinage App v1.0
Angular2 application to calculate minimum number of Sterling coins to produce amount of pennies.
Built using Sass, Angular2 and pure vanilla Javascript.
Browser based testing suite provided by Jasmine

## Install Dependencies
```$ npm install```
Also, if you want to run any of the gulp configuration you will need gulp installed locally.
The compiled CSS is already commited in the repo so there is no real reason to run gulp other than to Lint the JS or to 
play around with the Sass files and update the CSS.

## Running the application
```$ npm start```

This will fire up a nodejs static file server to... well, serve up our content.
Point your browser to http:\\localhost:3000 and play around.

![App Screenshot](https://cloud.githubusercontent.com/assets/11826936/14903706/0da6767e-0d71-11e6-8196-1ac7b562c281.jpg)

Invalid input will not convert or calculate amounts. Coins that aren't needed are a muted color.

## Running unit tests
```$ npm start```

This will fire up a nodejs static file server to... well, serve up our content.
Point your browser to http:\\localhost:3000\unit-tests.html and observe.

![Tests Screenshot](https://cloud.githubusercontent.com/assets/11826936/14903705/0bf027b2-0d71-11e6-8961-3a5780d5ea24.jpg)
