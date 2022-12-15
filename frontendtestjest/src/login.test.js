const puppeteer = require('puppeteer');

//change it to test
//change id to #

jest.setTimeout(30000);
url = 'http://54.90.240.88:8080';

describe('Test doc list', () => {
  let page;
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  // test('Test doc list', async () => {
  //   console.log('test doc list');
  //   await page.goto(url + '/login');

  //   await page.type('#email', 'doc@gmail.com');

  //   await page.type('#password', '123456');

  //   await page.click('#go');
  //   await page.waitForNavigation();

  //   await page.click('#historylist');
  //   await page.wait
  //   await page.goto(url + '/logout');

  //   expect(page.url()).toBe(url + '/logout');
  // });


  // test('Test admin list', async () => {
  //   console.log('test admin list');
  //   await page.goto(url + '/login');

  //   await page.type('#email', 'admin@gmail.com');

  //   await page.type('#password', '123456');

  //   await page.waitForSelector('#go');
  //   await page.click('#go');

  //   await page.waitForSelector('#docapp');
  //   await page.click('#docapp');

  //   await page.waitForSelector('a.navbar-brand.d-flex.align-items-center');
  //   await page.click('a.navbar-brand.d-flex.align-items-center');

  //   await page.goto(url + '/logout');
  // });

 test('Test admin add patient', async () => {
    console.log('Test admin add patient');
    await page.goto(url + '/login');

    await page.type('#email', 'admin@gmail.com');

    await page.type('#password', '123456');

    await page.waitForSelector('#go');
    await page.click('#go');

    await page.waitForSelector('#addpoint');
    await page.click('#addpoint');

    await page.waitForTimeout(3000);

    await page.type('#app_id', '252');
    await page.type('#app_time', '03:22');
    await page.type('#app_date', '2022-12-22');
    await page.type('#app_arkarn', 'ปวดใจ');

    await page.waitForSelector('#add');
    await page.click('#add');

    page.on('dialog', async dialog => {
      console.log(dialog.message());
      expect(dialog.message()).toBe('ทำการจองเรียบร้อยแล้ว');
      await dialog.dismiss();
    });
    
    await page.goto(url + '/logout');
    });



test('Test admin confirm patient', async () => {
    console.log('test admin confirm patient');
    await page.goto(url + '/login');

    await page.type('#email', 'admin@gmail.com');

    await page.type('#password', '123456');

    await page.waitForSelector('#go');
    await page.click('#go');

    await page.waitForSelector('#addpoint');
    await page.click('#addpoint');

    await page.waitForTimeout(3000);

    await page.waitForSelector('#em_confirm');
    await page.click('#em_confirm');

    page.on('dialog', async dialog => {
      console.log(dialog.message());
      expect(dialog.message()).toBe('อัพเดดข้อมูลเรียบร้อย');
      await dialog.dismiss();
    });

    await page.goto(url + '/logout');
  });


 test('Test Docker examine the patient', async () => {
    console.log('Docker examine the patient');
    await page.goto(url + '/login');

    await page.type('#email', 'doc@gmail.com');
    await page.type('#password', '123456');

    await page.waitForSelector('#go');
    await page.click('#go');

    await page.waitForSelector('#check');
    await page.click('#check');

    await page.waitForTimeout(5000);

    await page.waitForSelector('#info_z');
    await page.type('#info_z', 'ใช้ใจ');
    await page.waitForSelector('#price_z');
    await page.type('#price_z', '70000');

    console.log('clicked');
    await page.click('#doc_check_confirm');

    console.log('wait for dialog');
    page.on('dialog', async dialog => {
      console.log(dialog.message());
      expect(dialog.message()).toBe('บันทึกข้อมูลเรียบร้อย');
      await dialog.dismiss();
    });

    await page.waitForSelector('a.navbar-brand.d-flex.align-items-center');
    await page.click('a.navbar-brand.d-flex.align-items-center');
    await page.goto(url + '/logout');
  });

  // test('Test patient delete warning box show', async () => {
  //   console.log('test patient delete warning box show');
  //   await page.goto(url + '/login');

  //   await page.type('#email', 'patient@gmail.com');

  //   await page.type('#password', '123456');

  //   await page.waitForSelector('#go');
  //   await page.click('#go');

  //   await page.waitForSelector('#docapp');
  //   await page.click('#docapp');

  //   await page.waitForTimeout(5000);
    
  //   await page.waitForSelector('#app_date');
  //   await page.type('#app_date' , '2022-12-22');

  //   await page.waitForSelector('#app_time');
  //   await page.type('#app_time' , '02:22');

  //   await page.waitForSelector('#app_arkarn');
  //   await page.type('#app_arkarn' , 'ปวดใจ');

  //   await page.waitForSelector('#add');
  //   await page.click('#add');

    // await page.waitForSelector('#del1');
    // await page.click('#del1');

    // await page.waitForSelector('#cancel');
    // await page.click('#cancel');

    // await page.waitForSelector('#del1');
    // await page.click('#del1');

    // await page.waitForSelector('#del2');
    // await page.click('#del2');

  //   await page.waitForSelector('a.navbar-brand.d-flex.align-items-center')
  //   await page.click('a.navbar-brand.d-flex.align-items-center');

  //   await page.goto(url + '/logout');
  // });

  // test('Test doctor delete warning box show', async () => {
  //   console.log('test doctor delete warning box show');
  //   await page.goto(url + '/login');

  //   await page.type('#email', 'doc@gmail.com');

  //   await page.type('#password', '123456');

  //   await page.waitForSelector('#go');
  //   await page.click('#go');

  //   await page.waitForSelector('#appDoc');
  //   await page.click('#appDoc');

  //   await page.type('#app_id', '252');
  //   await page.type('#app_time', '03:22');
  //   await page.type('#app_date', '2022-12-22');
  //   await page.type('#app_arkarn', 'ปวดใจ');

  //   await page.waitForSelector('#add');
  //   await page.click('#add');

  //   await page.waitForSelector('#del1');
  //   await page.click('#del1');

  //   await page.waitForSelector('#cancel');
  //   await page.click('#cancel');

  //   await page.waitForSelector('#del1');
  //   await page.click('#del1');

  //   await page.waitForSelector('#del2');
  //   await page.click('#del2');

  //   await page.waitForSelector('a.navbar-brand.d-flex.align-items-center')
  //   await page.click('a.navbar-brand.d-flex.align-items-center');

  //   await page.goto(url + '/logout');
  //   });

  // test('Test admin delete warning box show', async () => {
  //   console.log('test admin delete warning box show');
  //   await page.goto(url + '/login');

  //   await page.type('#email', 'admin@gmail.com');

  //   await page.type('#password', '123456');

  //   await page.waitForSelector('#go');
  //   await page.click('#go');

  //   await page.waitForSelector('#addpoint');
  //   await page.click('#addpoint');

  //   await page.type('#app_id', '252');
  //   await page.type('#app_time', '03:22');
  //   await page.type('#app_date', '2022-12-22');
  //   await page.type('#app_arkarn', 'ปวดใจ');

  //   await page.waitForSelector('#add');
  //   await page.click('#add');

  //   await page.waitForSelector('#del1');
  //   await page.click('#del1');

  //   await page.waitForSelector('#cancel');
  //   await page.click('#cancel');

  //   await page.waitForSelector('#del1');
  //   await page.click('#del1');

  //   await page.waitForSelector('#del2');
  //   await page.click('#del2');

  //   await page.waitForSelector('a.navbar-brand.d-flex.align-items-center')
  //   await page.click('a.navbar-brand.d-flex.align-items-center');

  //   await page.goto(url + '/logout');
  //   });

  

  // test('Test patient time box error show', async () => {
  //   console.log('test patient time box error show');
  //   await page.goto(url + '/login');

  //   await page.type('#email', 'patient@gmail.com');

  //   await page.type('#password', '123456');

  //   await page.waitForSelector('#go');
  //   await page.click('#go');

  //   await page.waitForSelector('#docapp');
  //   await page.click('#docapp');

  //   await page.waitForSelector('#em_confirm');
  //   await page.click('#em_confirm');

  //   await page.type('#app_time', '25.70');
  //   await page.type('#app_date', '2021-12-22');

  //   await page.waitForSelector('a.navbar-brand.d-flex.align-items-center')
  //   await page.click('a.navbar-brand.d-flex.align-items-center');

  //   await page.goto(url + '/logout');
  //   });


});
