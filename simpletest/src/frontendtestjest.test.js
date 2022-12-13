const request = require("supertest");
const baseURL = "http://3.95.197.118:8080"

describe("end 2 end test", () => {
  it("test frontend login user and password", async () => {

    await page.goto('http://3.95.197.118:8080/login')
    await page.$eval('input[id=email]', (el, value) => el.value = value, 'doc@gmail.com');
    await page.$eval('input[id=password]', (el, value) => el.value = value, '123456');

    await page.$eval('button[id=go]', form => form.click());


    //expect new web url
    expect(page.url()).toBe('http://3.95.197.118:8080/homed');

  });
});


  // it('if not have Firstname then click register expect request', async () => {
  //   await page.goto('http://localhost:9090/register')
  //   await page.$eval('input[id=lname]', (el, value) => el.value = value, 'lastname');
  //   await page.$eval('input[id=Username]', (el, value) => el.value = value, 'test');
  //   await page.$eval('input[id=Email]', (el, value) => el.value = value, 'email@mail.com');
  //   await page.$eval('input[id=password]', (el, value) => el.value = value, '123456789');
  //   await page.$eval('input[id=con_password]', (el, value) => el.value = value, '123456789');
  //   await page.$eval('button[id=btnRegister]', form => form.click());

  //   expect(await page.$eval('div[id=fname_error]', el => el.textContent)).toBe('Please enter Firstname')
  // })
