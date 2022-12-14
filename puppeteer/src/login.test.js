const puppeteer = require('puppeteer');

//change it to test
//change id to #

jest.setTimeout(10000);
url = 'http://44.211.136.18:8080';

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
    await page.goto(url + '/login');

    await page.type('#email', 'doc@gmail.com');

    await page.type('#password', '123456');

    await page.click('#go');
    await page.waitForNavigation();

    await page.click('#historylist');
    await page.wait

    expect(page.url()).toBe(url + '/historylist');
  });


  test('Test admin list', async () => {
    await page.goto(url + '/login');

    await page.type('#email', 'admin@gmail.com');

    await page.type('#password', '123456');

    await page.click('#go');

    await page.waitForSelector('#docapp');
    await page.click('#docapp');

    await page.waitForSelector('a.navbar-brand.d-flex.align-items-center')
    await page.click('a.navbar-brand.d-flex.align-items-center');

    await page.goto(url + '/logout');
    console.log('logout');
  });

});
