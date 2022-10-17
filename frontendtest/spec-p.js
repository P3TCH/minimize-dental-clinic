const { element, browser } = require("protractor");

describe('Test doc list', function(){
    it('Test doc list',function(){
        let EC = browser.ExpectedConditions;
        browser.waitForAngularEnabled(false);

        browser.get('http://petchredhat.sytes.net:8080/login');

        browser.sleep(1000)
        element(by.id('email')).sendKeys('doc@gmail.com').then(function(){
            console.log('email entered');
        })

        browser.sleep(1000)
        element(by.id('password')).sendKeys('123456').then(function(){
            console.log('password entered');
        })

        browser.sleep(1000)
        element(by.id('go')).click().then(function(){
            console.log('login button clicked');
        })

        browser.sleep(1000)
        element(by.id('doclist')).click().then(function(){
            console.log('user doc button clicked');
        })

        browser.sleep(2000)
        element(by.css('span.text-white-600')).click().then(function(){
            console.log('main clicked');
        })

        browser.sleep(1000)
        element(by.id('emlist')).click().then(function(){
            console.log('user employee button clicked');
        })

        browser.sleep(1000)
        element(by.css('span.text-white-600')).click().then(function(){
            console.log('main clicked');
        })

        browser.sleep(1000)
        browser.get('http://petchredhat.sytes.net:8080/logout').then(function(){
            console.log('logout');
        })

        browser.sleep(1000)
    });


    it('Test admin list',function(){
        let EC = browser.ExpectedConditions;
        browser.waitForAngularEnabled(false);

        browser.get('http://petchredhat.sytes.net:8080/login');

        browser.sleep(1000)
        element(by.id('email')).sendKeys('doc@gmail.com').then(function(){
            console.log('email entered');
        })

        browser.sleep(1000)
        element(by.id('password')).sendKeys('123456').then(function(){
            console.log('password entered');
        })

        browser.sleep(1000)
        element(by.id('go')).click().then(function(){
            console.log('login button clicked');
        })

        browser.sleep(1000)
        element(by.id('docapp')).click().then(function(){
            console.log('doc history button clicked');
        })

        browser.sleep(1000)
        element(by.css('a.navbar-brand.d-flex.align-items-center')).click().then(function(){
            console.log('main page clicked');
        })

        browser.sleep(2000)
        browser.get('http://petchredhat.sytes.net:8080/logout').then(function(){
            console.log('logout');
        })

        browser.sleep(1000)
    });







    it('Test admin list',function(){
        let EC = browser.ExpectedConditions;
        browser.waitForAngularEnabled(false);

        browser.get('http://petchredhat.sytes.net:8080/login');

        browser.sleep(1000)
        element(by.id('email')).sendKeys('admin@gmail.com').then(function(){
            console.log('email entered');
        })

        browser.sleep(1000)
        element(by.id('password')).sendKeys('123456').then(function(){
            console.log('password entered');
        })

        browser.sleep(1000)
        element(by.id('go')).click().then(function(){
            console.log('login button clicked');
        })

        browser.sleep(1000)
        element(by.id('docapp')).click().then(function(){
            console.log('admin history button clicked');
        })

        browser.sleep(1000)
        element(by.css('a.navbar-brand.d-flex.align-items-center')).click().then(function(){
            console.log('main page clicked');
        })

        browser.sleep(2000)
        browser.get('http://petchredhat.sytes.net:8080/logout').then(function(){
            console.log('logout');
        })

        browser.sleep(1000)
    });


});

