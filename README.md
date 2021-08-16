# nightwatch
Running browser automation test cases using nightwatch.js


Browser automation using nightwatch.js 

 

Check node and npm installed on your system.  

Command: 

    $node -–version 

    $npm -–version 

 

Install globally if  not available 

https://nodejs.org/en/download/ 

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm 

 

Create package.json file for project and setup project. 

     $npm init -y 

     $npm install nightwatch geckodriver chromedriver --save-dev 

     $npx nightwatch 

 

SetUp configuration and run first test script 

 

Edit nightwatch.conf.json  

And put the source test folder name to nightwatch 

src_folders: ['./test_cases'], 

 

TestCase.js 

 

     module.exports = { 
        "@tags" : "global_test",
        “Navigate to an url.” : browser =>{ 

        browser.url(‘https://www.google.com’) 

        } 

     } 

 
Run to execute:
     
     $npx nightwatch --e firefox
     $npx nightwatch --e chrome
     
Run using tags

     $npm nightwatch --e firefox --tags global_test
 

 

Useful links:  

 

https://nightwatchjs.org/guide/using-nightwatch/writing-tests.html 

https://nightwatchjs.org/api/ 

https://github.com/nightwatchjs/nightwatch 

https://docs.travis-ci.com/user/languages/javascript-with-nodejs/ 

https://docs.travis-ci.com/user/gui-and-headless-browser 

 
