const { element, browser } = require("protractor");

describe('Test doc list', function(){
      it('Test doc list',function(){
         console.log("===== TEST DOC LIST =====")
        let EC = browser.ExpectedConditions;
        browser.waitForAngularEnabled(false);

        browser.get('http://petchrh.sytes.net:8080/login');

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
        element(by.id('historylist')).click().then(function(){
            console.log('doc history button clicked');
        })

        browser.sleep(1000)
        element(by.css('a.navbar-brand.d-flex.align-items-center')).click().then(function(){
            console.log('main page clicked');
        })

        browser.sleep(2000)
        browser.get('http://petchrh.sytes.net:8080/logout').then(function(){
            console.log('logout');
        })

        browser.sleep(1000)
    });



    it('Test admin list',function(){
         console.log("===== TEST ADMIN LIST =====")
        let EC = browser.ExpectedConditions;
        browser.waitForAngularEnabled(false);

        browser.get('http://petchrh.sytes.net:8080/login');

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
        browser.get('http://petchrh.sytes.net:8080/logout').then(function(){
            console.log('logout');
        })

        browser.sleep(1000)
    });

    it('Test doc check',function(){
            console.log("===== TEST DOC CHECK LIST =====")
            let EC = browser.ExpectedConditions;
            browser.waitForAngularEnabled(false);

            browser.get('http://petchrh.sytes.net:8080/login');

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
            element(by.id('check')).click().then(function(){
                console.log('doc check page button clicked');
            })

            browser.sleep(1000)
            element(by.id('info_z')).sendKeys('ใช้ใจ ไหลไปเรื่อย').then(function(){
                console.log('doc checked');
            })

            browser.sleep(1000)
            element(by.id('price_z')).sendKeys('70,000').then(function(){
                console.log('doc price');
            })

            browser.sleep(1000)
            element(by.id('doc_check_confirm')).click().then(function(){
                console.log('doc_check_confirm');
            })

            browser.sleep(1000)
            browser.switchTo().alert().accept();

            browser.sleep(1000)
            element(by.css('a.navbar-brand.d-flex.align-items-center')).click().then(function(){
                console.log('main page clicked');
            })

            browser.sleep(2000)
            browser.get('http://petchrh.sytes.net:8080/logout').then(function(){
                console.log('logout');
            })

            browser.sleep(1000)
        });

    it('TEST PATIENT DELETE WARNING BOX SHOW',function(){
        console.log("======= TEST PATIENT DELETE WARNING BOX SHOW =======")
        let EC = browser.ExpectedConditions;
        browser.waitForAngularEnabled(false);

        browser.get('http://petchrh.sytes.net:8080/login');

        browser.sleep(1000)
        element(by.id('email')).sendKeys('petch@gmail.com').then(function(){
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
        element(by.id('app_date')).sendKeys('2022-12-22').then(function(){
            console.log('patient apppointment date add');
        })

        browser.sleep(1000)
        element(by.id('app_time')).sendKeys('02:22').then(function(){
            console.log('patient apppointment time add');
        })

        browser.sleep(1000)
        element(by.id('app_arkarn')).sendKeys('ปวดใจ').then(function(){
            console.log('patient apppointment arkarn add');
        })

        browser.sleep(1000)
        element(by.id('add')).click().then(function(){
            console.log('patient add button clicked');
        })

        browser.sleep(1000)
        browser.switchTo().alert().accept();

        browser.sleep(1000)
        element(by.id('del1')).click().then(function(){
            console.log('patient delete button clicked');
        })

        browser.sleep(1000)
        element(by.id('cancel')).click().then(function(){
            console.log('patient cancel in delete button clicked');
        })

        browser.sleep(1000)
        element(by.id('del1')).click().then(function(){
            console.log('patient delete button clicked');
        })

        browser.sleep(1000)
        element(by.id('del2')).click().then(function(){
            console.log('patient delete2 button clicked');
        })

        browser.sleep(1000)
        browser.switchTo().alert().accept();

        browser.sleep(1000)
        element(by.css('a.navbar-brand.d-flex.align-items-center')).click().then(function(){
            console.log('main page clicked');
        })

        browser.sleep(2000)
        browser.get('http://petchrh.sytes.net:8080/logout').then(function(){
            console.log('logout');
        })

        browser.sleep(1000)
    });


    it('TEST DOC DELETE WARNING BOX SHOW',function(){
       console.log("======= TEST DOC DELETE WARNING BOX SHOW =======")
        let EC = browser.ExpectedConditions;
        browser.waitForAngularEnabled(false);

        browser.get('http://petchrh.sytes.net:8080/login');

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
        element(by.id('app_date')).sendKeys('2022-12-22').then(function(){
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
        browser.get('http://petchrh.sytes.net:8080/logout').then(function(){
            console.log('logout');
        })

        browser.sleep(1000)
    });


     it('TEST ADMIN DELETE WARNING BOX SHOW',function(){
       console.log("======= TEST ADMIN DELETE WARNING BOX SHOW =======")
        let EC = browser.ExpectedConditions;
        browser.waitForAngularEnabled(false);

        browser.get('http://petchrh.sytes.net:8080/login');

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
        element(by.id('addpoint')).click().then(function(){
            console.log('admin appointment button clicked');
        })

        browser.sleep(1000)
        element(by.id('app_id')).sendKeys('252').then(function(){
            console.log('admin key id patient');
        })

        browser.sleep(1000)
        element(by.id('app_date')).sendKeys('2022-12-22').then(function(){
            console.log('admin key date patient');
        })

        browser.sleep(1000)
        element(by.id('app_time')).sendKeys('03:22').then(function(){
            console.log('admin key time patient');
        })

        browser.sleep(1000)
        element(by.id('app_arkarn')).sendKeys('ปวดใจ').then(function(){
            console.log('admin key arkarn patient');
        })

        browser.sleep(1200)
        element(by.id('add')).click().then(function(){
            console.log('admin add button clicked');
        })
        
        browser.sleep(1000)
        browser.switchTo().alert().accept();

        browser.sleep(1000)
        element(by.id('del1')).click().then(function(){
            console.log('admin delete button clicked');
        })

        browser.sleep(1000)
        element(by.id('cancel')).click().then(function(){
            console.log('admin cancel in delete button clicked');
        })

        browser.sleep(1000)
        element(by.id('del1')).click().then(function(){
            console.log('admin delete button clicked');
        })

        browser.sleep(1000)
        element(by.id('del2')).click().then(function(){
            console.log('admin delete2 button clicked');
        })

        browser.sleep(1000)
        browser.switchTo().alert().accept();

        browser.sleep(1000)
        element(by.css('a.navbar-brand.d-flex.align-items-center')).click().then(function(){
            console.log('main page clicked');
        })

        browser.sleep(2000)
        browser.get('http://petchrh.sytes.net:8080/logout').then(function(){
            console.log('logout');
        })

        browser.sleep(1000)
    });

    it('TEST ADMIN CONFIRM WARNING BOX SHOW',function(){
        console.log("======= TEST ADMIN CONFIRM WARNING BOX SHOW =======")
         let EC = browser.ExpectedConditions;
         browser.waitForAngularEnabled(false);
 
         browser.get('http://petchrh.sytes.net:8080/login');
 
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
         element(by.id('addpoint')).click().then(function(){
             console.log('admin appointment page button clicked');
         })
 
         browser.sleep(1000)
         element(by.id('em_confirm')).click().then(function(){
             console.log('admin appointment confirm button clicked');
         })

         browser.sleep(1000)
         browser.switchTo().alert().accept();

         browser.sleep(1000)
         element(by.css('a.navbar-brand.d-flex.align-items-center')).click().then(function(){
             console.log('main page clicked');
         })
 
         browser.sleep(2000)
         browser.get('http://petchrh.sytes.net:8080/logout').then(function(){
             console.log('logout');
         })
 
         browser.sleep(1000)
     }); 
 

     it('TEST PATIENT TIME BOX ERROR SHOW',function(){
        console.log("======= TEST PATIENT TIME BOX ERROR SHOW =======")
         let EC = browser.ExpectedConditions;
         browser.waitForAngularEnabled(false);
 
         browser.get('http://petchrh.sytes.net:8080/login');
 
         browser.sleep(1000)
         element(by.id('email')).sendKeys('patient@gmail.com').then(function(){
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
             console.log('appointment button clicked');
         })


         browser.sleep(1000)
         element(by.id('app_time')).sendKeys('25.70').then(function(){
             console.log('time_box_test');
         })

         browser.sleep(1000)
         browser.switchTo().alert().accept();

         browser.sleep(1000)
         element(by.id('app_date')).sendKeys('2021-12-22').then(function(){
             console.log('patient apppointment date wrong test');
         })

         browser.sleep(1000)
         browser.switchTo().alert().accept();
 

         browser.sleep(1000)
         element(by.css('a.navbar-brand.d-flex.align-items-center')).click().then(function(){
             console.log('main page clicked');
         })
 
         browser.sleep(2000)
         browser.get('http://petchrh.sytes.net:8080/logout').then(function(){
             console.log('logout');
         })
 
         browser.sleep(1000)
     });


});

