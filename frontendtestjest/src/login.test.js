const puppeteer = require('puppeteer');

//change it to test
//change id to #

jest.setTimeout(30000);
url = 'http://18.234.99.117:8080';
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

//   test('Test doc list', async () => {
//     console.log('test doc list');
//     await page.goto(url + '/login');

//     await page.type('#email', 'doc@gmail.com');

//     await page.type('#password', '123456');

//     await page.click('#go');
//     await page.waitForNavigation();

//     await page.click('#historylist');
//     await page.wait
//     await page.goto(url + '/logout');

//     expect(page.url()).toBe(url + '/logout');
//   });


//   test('Test admin list', async () => {
//     console.log('test admin list');
//     await page.goto(url + '/login');

//     await page.type('#email', 'admin@gmail.com');

//     await page.type('#password', '123456');

//     await page.waitForSelector('#go');
//     await page.click('#go');

//     await page.waitForSelector('#docapp');
//     await page.click('#docapp');

//     await page.goto(url + '/logout');
//   });

//  test('Test admin add patient', async () => {
//     console.log('Test admin add patient');
//     await page.goto(url + '/login');

//     await page.type('#email', 'admin@gmail.com');

//     await page.type('#password', '123456');

//     await page.waitForSelector('#go');
//     await page.click('#go');

//     await page.waitForSelector('#addpoint');
//     await page.click('#addpoint');

//     await page.waitForTimeout(3000);

//     await page.type('#app_id', '252');
//     await page.type('#app_time', '03:22');
//     await page.type('#app_date', '2022-12-22');
//     await page.type('#app_arkarn', 'ปวดใจ');

//     await page.waitForSelector('#add');
//     await page.click('#add');

//     page.on('dialog', async dialog => {
//         console.log(dialog.message());
//         expect(dialog.message()).toBe('ทำการจองเรียบร้อยแล้ว');
//         await dialog.dismiss();
//     });

//     await page.goto(url + '/logout');
//     });



// test('Test admin confirm patient', async () => {
//     console.log('Test admin confirm patient');
//     await page.goto(url + '/login');

//     await page.type('#email', 'admin@gmail.com');

//     await page.type('#password', '123456');

//     await page.waitForSelector('#go');
//     await page.click('#go');

//     await page.waitForSelector('#addpoint');
//     await page.click('#addpoint');

//     await page.waitForTimeout(3000);

//     await page.waitForSelector('#em_confirm');
//     await page.click('#em_confirm');

//     page.on('dialog', async dialog2 => {
//       console.log(dialog2.message());
//       expect(dialog2.message()).toBe('อัพเดดข้อมูลเรียบร้อย');
//       await dialog2.dismiss();
//     });

//     await page.goto(url + '/logout');
//   });


//  test('Test Docter examine the patient', async () => {
//     console.log('Docter examine the patient');
//     await page.goto(url + '/login');

//     await page.type('#email', 'doc@gmail.com');
//     await page.type('#password', '123456');

//     await page.waitForSelector('#go');
//     await page.click('#go');

//     await page.waitForSelector('#check');
//     await page.click('#check');

//     await page.waitForTimeout(5000);

//     await page.waitForSelector('#info_z');
//     await page.type('#info_z', 'ใช้ใจ');
//     await page.waitForSelector('#price_z');
//     await page.type('#price_z', '70000');

//     await page.click('#doc_check_confirm');

//     page.on('dialog', async dialog3 => {
//       console.log(dialog3.message());
//       expect(dialog3.message()).toBe('อัพเดดข้อมูลเรียบร้อย');
//       await dialog3.dismiss();
//     });

//     await page.goto(url + '/logout');
//   });

  test('Test patient delete warning box show', async () => {
    console.log('test patient delete warning box show');
    await page.goto(url + '/login');

    await page.type('#email', 'patient@gmail.com');
    await page.type('#password', '123456');

    await page.waitForSelector('#go');
    await page.click('#go');

    await page.waitForSelector('#docapp');
    await page.click('#docapp');

    await page.waitForTimeout(3000);

    await page.waitForSelector('#app_date');
    await page.type('#app_date' , '12-22-2022');

    await page.waitForSelector('#app_time');
    await page.type('#app_time' , '02:22');

    await page.waitForSelector('#app_arkarn');
    await page.type('#app_arkarn' , 'ปวดใจ');
    
    await page.waitForTimeout(3000);
    
    await page.waitForSelector('#add');
    await page.click('#add');

    // await page.waitForNavigation({ waitUntil: 'load' })
    await page.waitForTimeout(3000);

    page.on('dialog', async dialog4 => {
      console.log(dialog4.message());
      expect(dialog4.message()).toBe('ทำการจองเรียบร้อยแล้ว');
      await dialog4.dismiss();
    });

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
    await page.click('#del2');

    page.on('dialog', async dialog5 => {
      console.log(dialog5.message());
      expect(dialog5.message()).toBe('ลบข้อมูลเสร็จสิ้น');
      await dialog5.dismiss();
    });

    await page.goto(url + '/logout');
  });

  // test('Test doctor delete warning box show', async () => {
  //   console.log('test doctor delete warning box show');
  //   await page.goto(url + '/login');

  //   await page.type('#email', 'doc@gmail.com');

  //   await page.type('#password', '123456');

  //   await page.waitForSelector('#go');
  //   await page.click('#go');

  //   await page.waitForSelector('#appDoc');
  //   await page.click('#appDoc');

  //   await page.waitForTimeout(3000);

  //   await page.waitForSelector('#app_id');
  //   await page.type('#app_id', '252');

  //   await page.waitForSelector('#app_time');
  //   await page.type('#app_time', '03:22');

  //   await page.waitForSelector('#app_date');
  //   await page.type('#app_date', '12-22-2022');

  //   await page.waitForSelector('#app_arkarn');
  //   await page.type('#app_arkarn', 'ปวดใจ');

  //   await page.waitForSelector('#add');
  //   await page.click('#add');

  //   page.on('dialog', async dialog6 => {
  //       console.log(dialog6.message());
  //       expect(dialog6.message()).toBe('ทำการจองเรียบร้อยแล้ว');
  //       await dialog6.dismiss();
  //     });


  //   await page.waitForSelector('#del1');
  //   await page.click('#del1');

  //   await page.waitForTimeout(3000);

  //   await page.waitForSelector('#cancel');
  //   await page.click('#cancel');

  //   await page.waitForTimeout(3000);

  //   await page.waitForSelector('#del1');
  //   await page.click('#del1');

  //   await page.waitForTimeout(3000);

  //   await page.waitForSelector('#del2');
  //   await page.click('#del2');

  //   page.on('dialog', async dialog7 => {
  //     console.log(dialog7.message());
  //     expect(dialog7.message()).toBe('ลบข้อมูลเสร็จสิ้น');
  //     await dialog7.dismiss();
  //   });

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

  //   await page.waitForTimeout(3000);

  //   await page.waitForSelector('#app_id');
  //   await page.type('#app_id', '252');

  //   await page.waitForSelector('#app_time');
  //   await page.type('#app_time', '03:22');

  //   await page.waitForSelector('#app_date');
  //   await page.type('#app_date', '12-22-2022');

  //   await page.waitForSelector('#app_arkarn');
  //   await page.type('#app_arkarn', 'ปวดใจ');

  //   await page.waitForSelector('#add');
  //   await page.click('#add');

  //   page.on('dialog', async dialog8 => {
  //     console.log(dialog8.message());
  //     expect(dialog8.message()).toBe('ทำการจองเรียบร้อยแล้ว');
  //     await dialog8.dismiss();
  //   });

  //   await page.waitForSelector('#del1');
  //   await page.click('#del1');
  //   await page.waitForTimeout(3000);

  //   await page.waitForSelector('#cancel');
  //   await page.click('#cancel');
  //   await page.waitForTimeout(3000);

  //   await page.waitForSelector('#del1');
  //   await page.click('#del1');
  //   await page.waitForTimeout(3000);

  //   await page.waitForSelector('#del2');
  //   await page.click('#del2');

  //   page.on('dialog', async dialog9 => {
  //     console.log(dialog9.message());
  //     expect(dialog9.message()).toBe('ลบข้อมูลเสร็จสิ้น');
  //     await dialog9.dismiss();
  //   });

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
    //   await page.waitForTimeout(3000);

    //   await page.waitForSelector('#app_id');
    //   await page.type('#app_id', '252');
    
    //   await page.waitForSelector('#app_time');
    //   await page.type('#app_time', '25.70');
    
    //   await page.waitForSelector('#app_date');
    //   await page.type('#app_date', '12-22-2022');
    
    //   await page.waitForSelector('#app_arkarn');
    //   await page.type('#app_arkarn', 'ปวดใจ');

       
    //   page.on('dialog', async dialog10 => {
    //   console.log(dialog10.message());
    //   expect(dialog10.message()).toBe('กรุณาใส่เวลาให้ถูกต้อง');
    //   await dialog10.dismiss();
    // });

    // await page.waitForSelector('#app_id');
    //   await page.type('#app_id', '252');
    
    //   await page.waitForSelector('#app_time');
    //   await page.type('#app_time', '12.12');
    
    //   await page.waitForSelector('#app_date');
    //   await page.type('#app_date', '12-22-2020');
    
    //   await page.waitForSelector('#app_arkarn');
    //   await page.type('#app_arkarn', 'ปวดใจ');


    //   page.on('dialog', async dialog11 => {
    //   console.log(dialog11.message());
    //   expect(dialog11.message()).toBe('กรุณาเลือกวันที่ใหม่');
    //   await dialog11.dismiss();
    // });
  
    //   await page.goto(url + '/logout');
    //   });
  


});
