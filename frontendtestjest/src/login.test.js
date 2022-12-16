const puppeteer = require('puppeteer');

//change it to test
//change id to #

jest.setTimeout(35000);
url = 'http://127.0.0.1:8080';
let dialogHandled = false;

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

  test('Test doc list', async () => {
    console.log('test doc list');
    await page.goto(url + '/login');

    await page.type('#email', 'doc@gmail.com');

    await page.type('#password', '123456');

    await page.click('#go');
    await page.waitForNavigation();

    await page.click('#historylist');
    await page.wait
    await page.goto(url + '/logout');

    expect(page.url()).toBe(url + '/logout');
  });


  test('Test admin list', async () => {
    console.log('test admin list');
    await page.goto(url + '/login');

    await page.type('#email', 'admin@gmail.com');

    await page.type('#password', '123456');

    await page.waitForSelector('#go');
    await page.click('#go');

    await page.waitForSelector('#docapp');
    await page.click('#docapp');

    await page.goto(url + '/logout');
  });

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
    page.on('dialog', async dialog1 => {
      try {
        console.log(dialog1.message());
        await dialog1.dismiss();
      } catch (error) {
        console.log('error');
      }
    });
    await page.click('#add');



    await page.goto(url + '/logout');
  });

});

describe('Test admin confirm', () => {
  let page;
  let browser;


  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Test admin confirm patient', async () => {
    console.log('Test admin confirm patient');
    await page.goto(url + '/login');

    await page.type('#email', 'admin@gmail.com');

    await page.type('#password', '123456');

    await page.waitForSelector('#go');
    await page.click('#go');

    await page.waitForSelector('#addpoint');
    await page.click('#addpoint');

    await page.waitForTimeout(5000);

    await page.waitForSelector('#em_confirm');
    page.on('dialog', async dialog2 => {
      try {
        console.log(dialog2.message());
        await dialog2.dismiss();
      } catch (error) {
        console.log('error');
      }
    });
    await page.click('#em_confirm');



    await page.goto(url + '/logout');
  });
});


describe('Test Docter examine the patient', () => {
  let page;
  let browser;


  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });
  test('Test Docter examine the patient', async () => {
    console.log('Docter examine the patient');
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

    page.on('dialog', async dialog3 => {
      try {
        console.log(dialog3.message());
        await dialog3.dismiss();
      } catch (error) {
        console.log('error');
      }
    });
    await page.click('#doc_check_confirm');



    await page.goto(url + '/logout');
  });
});


describe('Test patient add appointment', () => {
  let page;
  let browser;


  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });
  test('Test patient add appointment', async () => {
    console.log('Test patient add appointment');
    await page.goto(url + '/login');

    await page.type('#email', 'patient@gmail.com');
    await page.type('#password', '123456');

    await page.waitForSelector('#go');
    await page.click('#go');

    await page.waitForSelector('#docapp');
    await page.click('#docapp');

    await page.waitForTimeout(3000);

    await page.waitForSelector('#app_date');
    await page.type('#app_date', '12-22-2022');

    await page.waitForSelector('#app_time');
    await page.type('#app_time', '02.22');

    await page.waitForSelector('#app_arkarn');
    await page.type('#app_arkarn', 'ปวดใจ');

    await page.waitForTimeout(3000);

    await page.waitForSelector('#add');
    await page.click('#add');

    page.on('dialog', async dialog4 => {
      try {
        console.log(dialog4.message());
        await dialog4.dismiss();
      } catch (error) {
        console.log('error');
      }
    });
    await page.goto(url + '/logout');
  });

  test('Test patient delete warning box show', async () => {
    console.log('test patient delete warning box show');
    await page.goto(url + '/login');

    await page.type('#email', 'patient@gmail.com');
    await page.type('#password', '123456');

    await page.waitForSelector('#go');
    await page.click('#go');

    await page.waitForSelector('#docapp');
    await page.click('#docapp');

    await page.waitForTimeout(5000);

    await page.waitForSelector('#del1');
    await page.click('#del1');

    await page.waitForTimeout(5000);

    await page.waitForSelector('#del2');
    page.on('dialog', async dialog5 => {
      try {
        console.log(dialog5.message());
        await dialog5.dismiss();
      } catch (error) {
        console.log('error');
      }
    });
    await page.click('#del2');



    await page.goto(url + '/logout');
  });
});

describe('Test doctor add appointment', () => {
  let page;
  let browser;


  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });
  test('Test doctor add warning box show', async () => {
    console.log('test doctor delete warning box show');
    await page.goto(url + '/login');

    await page.type('#email', 'doc@gmail.com');

    await page.type('#password', '123456');

    await page.waitForSelector('#go');
    await page.click('#go');

    await page.waitForSelector('#appDoc');
    await page.click('#appDoc');

    await page.waitForTimeout(3000);

    await page.waitForSelector('#app_id');
    await page.type('#app_id', '252');

    await page.waitForSelector('#app_time');
    await page.type('#app_time', '03:22');

    await page.waitForSelector('#app_date');
    await page.type('#app_date', '12-22-2022');

    await page.waitForSelector('#app_arkarn');
    await page.type('#app_arkarn', 'ปวดใจ');

    await page.waitForSelector('#add');
    page.on('dialog', async dialog6 => {
      try {
        console.log(dialog6.message());
        await dialog6.dismiss();
      } catch (error) {
        console.log('error');
      }
    });
    await page.click('#add');


    await page.goto(url + '/logout');
  });


  test('Test doctor delete warning box show', async () => {
    console.log('test doctor delete warning box show');
    await page.goto(url + '/login');

    await page.type('#email', 'doc@gmail.com');

    await page.type('#password', '123456');

    await page.waitForSelector('#go');
    await page.click('#go');

    await page.waitForSelector('#appDoc');
    await page.click('#appDoc');

    await page.waitForTimeout(3000);

    await page.waitForSelector('#del1');
    await page.click('#del1');

    await page.waitForTimeout(3000);

    await page.waitForSelector('#cancel');
    await page.click('#cancel');

    await page.waitForTimeout(3000);

    await page.waitForSelector('#del1');
    await page.click('#del1');

    await page.waitForTimeout(3000);

    await page.waitForSelector('#del2');
    page.on('dialog', async dialog7 => {
      try {
        console.log(dialog7.message());
        await dialog7.dismiss();
      } catch (error) {
        console.log('error');
      }
    });
    await page.click('#del2');



    await page.goto(url + '/logout');

  });
});

describe('Test admin add appointment', () => {
  let page;
  let browser;


  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });
  test('Test admin add warning box show', async () => {
    console.log('test admin delete warning box show');
    await page.goto(url + '/login');

    await page.type('#email', 'admin@gmail.com');

    await page.type('#password', '123456');

    await page.waitForSelector('#go');
    await page.click('#go');

    await page.waitForSelector('#addpoint');
    await page.click('#addpoint');

    await page.waitForTimeout(5000);

    await page.waitForSelector('#app_id');
    await page.type('#app_id', '252');

    await page.waitForSelector('#app_time');
    await page.type('#app_time', '03:22');

    await page.waitForSelector('#app_date');
    await page.type('#app_date', '12-22-2022');

    await page.waitForSelector('#app_arkarn');
    await page.type('#app_arkarn', 'ปวดใจ');

    await page.waitForSelector('#add');
    page.on('dialog', async dialog8 => {
      try {
        console.log(dialog8.message());
        await dialog8.dismiss();
      } catch (error) {
        console.log('error');
      }
    });
    await page.click('#add');



    await page.goto(url + '/logout');
  });


  test('Test admin delete warning box show', async () => {
    console.log('test admin delete warning box show');
    await page.goto(url + '/login');

    await page.type('#email', 'admin@gmail.com');

    await page.type('#password', '123456');

    await page.waitForSelector('#go');
    await page.click('#go');

    await page.waitForSelector('#addpoint');
    await page.click('#addpoint');

    await page.waitForTimeout(5000);

    await page.waitForSelector('#del1');
    await page.click('#del1');
    await page.waitForTimeout(5000);

    await page.waitForSelector('#cancel');
    await page.click('#cancel');
    await page.waitForTimeout(5000);

    await page.waitForSelector('#del1');
    await page.click('#del1');
    await page.waitForTimeout(3000);

    await page.waitForSelector('#del2');
    page.on('dialog', async dialog9 => {
      try {
        console.log(dialog9.message());
        await dialog9.dismiss();
      } catch (error) {
        console.log('error');
      }

    });
    await page.click('#del2');



    await page.goto(url + '/logout');
  });
});

