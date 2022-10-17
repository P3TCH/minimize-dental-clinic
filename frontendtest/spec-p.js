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
        element(by.css('a.dropdown-toggle.nva-link')).click().then(function(){

        })

        browser.sleep(1000)
        element(by.css('i.fas.fa-sign-out-alt.fa-fw.me-2.text-gray-400')).click().then(function(){
            console.log('logout');
        })

        browser.sleep(1000)
    });

    it('aaa',function(){
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

    });
});

