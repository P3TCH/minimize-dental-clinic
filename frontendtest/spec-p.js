const { element, browser } = require("protractor");

describe('Test doc list', function(){
    // it('Test doc list',function(){
    //     let EC = browser.ExpectedConditions;
    //     browser.waitForAngularEnabled(false);

    //     browser.get('http://petchredhat.sytes.net:8080/login');

    //     browser.sleep(1000)
    //     element(by.id('email')).sendKeys('doc@gmail.com').then(function(){
    //         console.log('email entered');
    //     })

    //     browser.sleep(1000)
    //     element(by.id('password')).sendKeys('123456').then(function(){
    //         console.log('password entered');
    //     })

    //     browser.sleep(1000)
    //     element(by.id('go')).click().then(function(){
    //         console.log('login button clicked');
    //     })

    //     browser.sleep(1000)
    //     element(by.id('listdoc')).click().then(function(){
    //         console.log('user doc button clicked');
    //     })

    //     browser.sleep(2000)
    //     element(by.css('span.text-white-600')).click().then(function(){
    //         console.log('main clicked');
    //     })

    //     browser.sleep(1000)
    //     element(by.id('emlist')).click().then(function(){
    //         console.log('user employee button clicked');
    //     })

    //     browser.sleep(1000)
    //     element(by.css('span.text-white-600')).click().then(function(){
    //         console.log('main clicked');
    //     })

    //     browser.sleep(1000)
    //     browser.get('http://petchredhat.sytes.net:8080/logout').then(function(){
    //         console.log('logout');
    //     })

    //     browser.sleep(1000)
    // });



    // it('Test doc list',function(){
    //     let EC = browser.ExpectedConditions;
    //     browser.waitForAngularEnabled(false);

    //     browser.get('http://petchredhat.sytes.net:8080/login');

    //     browser.sleep(1000)
    //     element(by.id('email')).sendKeys('doc@gmail.com').then(function(){
    //         console.log('email entered');
    //     })

    //     browser.sleep(1000)
    //     element(by.id('password')).sendKeys('123456').then(function(){
    //         console.log('password entered');
    //     })

    //     browser.sleep(1000)
    //     element(by.id('go')).click().then(function(){
    //         console.log('login button clicked');
    //     })

    //     browser.sleep(1000)
    //     element(by.id('historylist')).click().then(function(){
    //         console.log('doc history button clicked');
    //     })

    //     browser.sleep(1000)
    //     element(by.css('a.navbar-brand.d-flex.align-items-center')).click().then(function(){
    //         console.log('main page clicked');
    //     })

    //     browser.sleep(2000)
    //     browser.get('http://petchredhat.sytes.net:8080/logout').then(function(){
    //         console.log('logout');
    //     })

    //     browser.sleep(1000)
    // });



    // it('Test admin list',function(){
    //     let EC = browser.ExpectedConditions;
    //     browser.waitForAngularEnabled(false);

    //     browser.get('http://petchredhat.sytes.net:8080/login');

    //     browser.sleep(1000)
    //     element(by.id('email')).sendKeys('admin@gmail.com').then(function(){
    //         console.log('email entered');
    //     })

    //     browser.sleep(1000)
    //     element(by.id('password')).sendKeys('123456').then(function(){
    //         console.log('password entered');
    //     })

    //     browser.sleep(1000)
    //     element(by.id('go')).click().then(function(){
    //         console.log('login button clicked');
    //     })

    //     browser.sleep(1000)
    //     element(by.id('docapp')).click().then(function(){
    //         console.log('admin history button clicked');
    //     })

    //     browser.sleep(1000)
    //     element(by.css('a.navbar-brand.d-flex.align-items-center')).click().then(function(){
    //         console.log('main page clicked');
    //     })

    //     browser.sleep(2000)
    //     browser.get('http://petchredhat.sytes.net:8080/logout').then(function(){
    //         console.log('logout');
    //     })

    //     browser.sleep(1000)
    // });



    // it('TEST PATIENT DELETE WARNING BOX SHOW',function(){
    //     console.log("======= TEST PATIENT DELETE WARNING BOX SHOW =======")
    //     let EC = browser.ExpectedConditions;
    //     browser.waitForAngularEnabled(false);

    //     browser.get('http://petchredhat.sytes.net:8080/login');

    //     browser.sleep(1000)
    //     element(by.id('email')).sendKeys('petch@gmail.com').then(function(){
    //         console.log('email entered');
    //     })

    //     browser.sleep(1000)
    //     element(by.id('password')).sendKeys('123456').then(function(){
    //         console.log('password entered');
    //     })

    //     browser.sleep(1000)
    //     element(by.id('go')).click().then(function(){
    //         console.log('login button clicked');
    //     })

    //     browser.sleep(1000)
    //     element(by.id('docapp')).click().then(function(){
    //         console.log('admin history button clicked');
    //     })

    //     browser.sleep(1000)
    //     element(by.id('app_date')).sendKeys('12/22/2022').then(function(){
    //         console.log('patient apppointment date add');
    //     })

    //     browser.sleep(1000)
    //     element(by.id('app_time')).sendKeys('02:22').then(function(){
    //         console.log('patient apppointment time add');
    //     })

    //     browser.sleep(1000)
    //     element(by.id('app_arkarn')).sendKeys('ปวดใจ').then(function(){
    //         console.log('patient apppointment arkarn add');
    //     })

    //     browser.sleep(1000)
    //     element(by.id('add')).click().then(function(){
    //         console.log('patient add button clicked');
    //     })

    //     browser.sleep(1000)
    //     browser.switchTo().alert().accept();

    //     browser.sleep(1000)
    //     element(by.id('del1')).click().then(function(){
    //         console.log('patient delete button clicked');
    //     })

    //     browser.sleep(1000)
    //     element(by.id('cancel')).click().then(function(){
    //         console.log('patient cancel in delete button clicked');
    //     })

    //     browser.sleep(1000)
    //     element(by.id('del1')).click().then(function(){
    //         console.log('patient delete button clicked');
    //     })

    //     browser.sleep(1000)
    //     element(by.id('del2')).click().then(function(){
    //         console.log('patient delete2 button clicked');
    //     })

    //     browser.sleep(1000)
    //     browser.switchTo().alert().accept();

    //     browser.sleep(1000)
    //     element(by.css('a.navbar-brand.d-flex.align-items-center')).click().then(function(){
    //         console.log('main page clicked');
    //     })

    //     browser.sleep(2000)
    //     browser.get('http://petchredhat.sytes.net:8080/logout').then(function(){
    //         console.log('logout');
    //     })

    //     browser.sleep(1000)
    // });


    it('TEST DOC DELETE WARNING BOX SHOW',function(){
       console.log("======= TEST DOC DELETE WARNING BOX SHOW =======")
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
        element(by.id('appDoc')).click().then(function(){
            console.log('doc appointment button clicked');
        })

        browser.sleep(1000)
        element(by.id('app_id')).sendKeys('252').then(function(){
            console.log('doc key id patient');
        })

        browser.sleep(1000)
        element(by.id('app_date')).sendKeys('12/22/2022').then(function(){
            console.log('doc key date patient');
        })

        browser.sleep(1000)
        element(by.id('app_time')).sendKeys('03:22').then(function(){
            console.log('doc key time patient');
        })

        browser.sleep(1000)
        element(by.id('app_arkarn')).sendKeys('ปวดใจ').then(function(){
            console.log('doc key arkarn patient');
        })

        browser.sleep(1200)
        element(by.id('add')).click().then(function(){
            console.log('doc add button clicked');
        })
        
        browser.sleep(1000)
        browser.switchTo().alert().accept();

        browser.sleep(1000)
        element(by.id('del1')).click().then(function(){
            console.log('doc delete button clicked');
        })

        browser.sleep(1000)
        element(by.id('cancel')).click().then(function(){
            console.log('doc cancel in delete button clicked');
        })

        browser.sleep(1000)
        element(by.id('del1')).click().then(function(){
            console.log('doc delete button clicked');
        })

        browser.sleep(1000)
        element(by.id('del2')).click().then(function(){
            console.log('doc delete2 button clicked');
        })

        browser.sleep(1000)
        browser.switchTo().alert().accept();

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

