const request = require("supertest");
const baseURL = "http://3.85.171.116:8080"

// describe("end 2 end test", () => {
//     beforeAll(async () => {
//       await page.goto('http://3.85.171.116:8080/login')
//     })
// });


describe("end 2 end test", () => {
  it("test frontend doctor login user and password", async () => {
    await page.goto('http://3.85.171.116:8080/login')
    await Promise.all([
      page.$eval('input[id=email]', (el, value) => el.value = value, 'doc@gmail.com'),
      page.$eval('input[id=password]', (el, value) => el.value = value, '123456'),
      page.$eval('button[id=go]', form => form.click()),

      await page.waitForNavigation(),
    ]);
   
    // await page.$eval('input[id=email]', (el, value) => el.value = value, 'doc@gmail.com');
    // await page.$eval('input[id=password]', (el, value) => el.value = value, '123456');
    // await page.$eval('button[id=go]', form => form.click());

    expect(page.url()).toBe('http://3.85.171.116:8080/homed');
  });
});

describe("end 2 end test", () => {
  it("test frontend click appointment doctor", async () => {

    await page.goto('http://3.85.171.116:8080/homed')
    
    await page.$eval('button[id=appdoc]', form => form.click());

    expect(page.url()).toBe('http://3.85.171.116:8080/appointmentDoc');

  });
});

describe("end 2 end test", () => {
  it("test frontend doc complete appointment ", async () => {

    await page.goto('http://3.85.171.116:8080/appointmentDoc')
    
    await page.$eval('input[id=app_id]', (el, value) => el.value = value, '1254698756');
    await page.$eval('input[id=app_date]', (el, value) => el.value = value, '12/23/2022');
    await page.$eval('input[id=app_time]', (el, value) => el.value = value, '10.30');
    await page.$eval('input[id=app_arkarn]', (el, value) => el.value = value, 'heartattack');

    await page.$eval('button[id=add]', form => form.click());

    expect(await page.$eval('div[id=waitting_case]', el => el.textContent)).toBe('หมายเลขเคส : 25 ชื่อหมอ : หมอสุนิล เดนทิสส วันที่ : 2022-12-23 เวลา : 10.30 อาการ : heartattack สถานะ : รอยืนยัน')


  });
});

describe("end 2 end test", () => {
  it("test frontend doc confirm appointment ", async () => {

    await page.goto('http://3.85.171.116:8080/appointmentDoc')

    await page.$eval('button[id=confirm_app]', form => form.click());

    expect(await page.$eval('div[id=pointed]', el => el.textContent)).toBe('หมายเลขเคส : 25 ชื่อหมอ : หมอสุนิล เดนทิสส วันที่ : 2022-12-23 เวลา : 10.30 อาการ : heartattack สถานะ : รอตรวจ')

  });
});

describe("end 2 end test", () => {
  it("test frontend doc check appointment", async () => {

    await page.goto('http://3.85.171.116:8080/homed')

    await page.$eval('button[id=check]', form => form.click());

    expect(page.url()).toBe('http://3.85.171.116:8080/check');

  });
});

describe("end 2 end test", () => {
  it("test frontend doc history appointment", async () => {

    await page.goto('http://3.85.171.116:8080/homed')

    await page.$eval('button[id=historylist]', form => form.click());

    expect(page.url()).toBe('http://3.85.171.116:8080/historylist');
    
  });
});

describe("end 2 end test", () => {
  it("test frontend doc list doctor", async () => {

    await page.goto('http://3.85.171.116:8080/homed')

    await page.$eval('button[id=listdoc]', form => form.click());

    expect(page.url()).toBe('http://3.85.171.116:8080/listDoctor');
    
  });
});


describe("end 2 end test", () => {
  it("test frontend doc list employee", async () => {

    await page.goto('http://3.85.171.116:8080/homed')

    await page.$eval('button[id=emlist]', form => form.click());

    expect(page.url()).toBe('http://3.85.171.116:8080/listEmployee');
    
  });
});







describe("end 2 end test", () => {
  it("test frontend employee login user and password", async () => {
    await page.goto('http://3.85.171.116:8080/login')
    await Promise.all([
      page.$eval('input[id=email]', (el, value) => el.value = value, 'admin@gmail.com'),
      page.$eval('input[id=password]', (el, value) => el.value = value, '123456'),
      page.$eval('button[id=go]', form => form.click()),

      await page.waitForNavigation(),
    ]);
   
  

    expect(page.url()).toBe('http://3.85.171.116:8080/homea');
  });
});

describe("end 2 end test", () => {
  it("test frontend click appointment employee", async () => {

    await page.goto('http://3.85.171.116:8080/homea')
    
    await page.$eval('button[id=apppoint]', form => form.click());

    
    expect(page.url()).toBe('http://3.85.171.116:8080/appointmentEmp');

  });
});

describe("end 2 end test", () => {
  it("test fronten employee complete appointment ", async () => {

    await page.goto('http://3.85.171.116:8080/appointmentEmp')
    
    await page.$eval('input[id=app_id]', (el, value) => el.value = value, '1254698756');
    await page.$eval('input[id=app_date]', (el, value) => el.value = value, '12/23/2022');
    await page.$eval('input[id=app_time]', (el, value) => el.value = value, '10.30');
    await page.$eval('input[id=app_arkarn]', (el, value) => el.value = value, 'heartattack');

    await page.$eval('button[id=add]', form => form.click());

    expect(await page.$eval('div[id=waitting_case]', el => el.textContent)).toBe('หมายเลขเคส : 25 ชื่อหมอ : หมอสุนิล เดนทิสส วันที่ : 2022-12-23 เวลา : 10.30 อาการ : heartattack สถานะ : รอยืนยัน')


  });
});


describe("end 2 end test", () => {
  it("test frontend employee confirm appointment ", async () => {

    await page.goto('http://3.85.171.116:8080/appointmentEmp')

    await page.$eval('button[id=em_confirm]', form => form.click());

    expect(await page.$eval('div[id=pointed]', el => el.textContent)).toBe('หมายเลขเคส : 25 ชื่อหมอ : หมอสุนิล เดนทิสส วันที่ : 2022-12-23 เวลา : 10.30 อาการ : heartattack สถานะ : รอตรวจ')

  });
});


describe("end 2 end test", () => {
  it("test frontend employee check appointment", async () => {

    await page.goto('http://3.85.171.116:8080/homea')

    await page.$eval('button[id=docapp]', form => form.click());

    expect(page.url()).toBe('http://3.85.171.116:8080/historylist');

  });
});

describe("end 2 end test", () => {
  it("test frontend employee list doctor", async () => {

    await page.goto('http://3.85.171.116:8080/homea')

    await page.$eval('button[id=doclist]', form => form.click());

    expect(page.url()).toBe('http://3.85.171.116:8080/listDoctor');
    
  });
});


describe("end 2 end test", () => {
  it("test frontend employee list employee", async () => {

    await page.goto('http://3.85.171.116:8080/homea')

    await page.$eval('button[id=emlist]', form => form.click());

    expect(page.url()).toBe('http://3.85.171.116:8080/listEmployee');
    
  });
});

describe("end 2 end test", () => {
  it("test frontend employee add doctor", async () => {

    await page.goto('http://3.85.171.116:8080/homea')

    await page.$eval('button[id=adddoc]', form => form.click());

    expect(page.url()).toBe('http://3.85.171.116:8080/signupDoc');
    
  });
});


describe("end 2 end test", () => {
  it("employee add new doctor", async () => {

    await page.goto('http://3.85.171.116:8080/signupDoc')
    
    await page.$eval('input[id=first_name]', (el, value) => el.value = value, 'สมหมาย');
    await page.$eval('input[id=lastname]', (el, value) => el.value = value, 'สมานใจ');
    await page.$eval('input[id=birthday]', (el, value) => el.value = value, '12/23/1965');

    await page.$eval('input[id=gender]', (el, value) => el.value = value, 'ชาย');

    await page.$eval('input[id=citizenid]', (el, value) => el.value = value, '1254698756');
    await page.$eval('input[id=tel]', (el, value) => el.value = value, '0964852165');
    await page.$eval('input[id=email]', (el, value) => el.value = value, 'sommai@gmail.com');

    await page.$eval('input[id=homenumber]', (el, value) => el.value = value, '762');
    await page.$eval('input[id=street]', (el, value) => el.value = value, 'กาญจนาภิเษก');
    await page.$eval('input[id=district]', (el, value) => el.value = value, 'บางใหญ่');
    await page.$eval('input[id=province]', (el, value) => el.value = value, 'กรุงเทพ');
    await page.$eval('input[id=zipcode]', (el, value) => el.value = value, '10120');

    await page.$eval('input[id=password]', (el, value) => el.value = value, '123456');
    await page.$eval('input[id=RepeatPassword]', (el, value) => el.value = value, '123456');

    await page.$eval('button[id=register]', form => form.click());

    expect(page.url()).toBe('http://3.85.171.116:8080/homea');

  });
});

describe("end 2 end test", () => {
  it("employee add employee", async () => {

    await page.goto('http://3.85.171.116:8080/homea')

    await page.$eval('button[id=addadmin]', form => form.click());

    expect(page.url()).toBe('http://3.85.171.116:8080/signupAdmin');
    
  });
});

describe("end 2 end test", () => {
  it("employee add new employee", async () => {

    await page.goto('http://3.85.171.116:8080/signupAdmin')
    
    await page.$eval('input[id=firstname]', (el, value) => el.value = value, 'สมหมาย');
    await page.$eval('input[id=lastname]', (el, value) => el.value = value, 'สมานใจ');
    await page.$eval('input[id=birthday]', (el, value) => el.value = value, '12/23/1965');

    await page.$eval('input[id=gender]', (el, value) => el.value = value, 'ชาย');

    await page.$eval('input[id=citizenid]', (el, value) => el.value = value, '1254698756');
    await page.$eval('input[id=tel]', (el, value) => el.value = value, '0964852165');
    await page.$eval('input[id=email]', (el, value) => el.value = value, 'sommai@gmail.com');

    await page.$eval('input[id=homenumber]', (el, value) => el.value = value, '762');
    await page.$eval('input[id=street]', (el, value) => el.value = value, 'กาญจนาภิเษก');
    await page.$eval('input[id=district]', (el, value) => el.value = value, 'บางใหญ่');
    await page.$eval('input[id=province]', (el, value) => el.value = value, 'กรุงเทพ');
    await page.$eval('input[id=zipcode]', (el, value) => el.value = value, '10120');

    await page.$eval('input[id=password]', (el, value) => el.value = value, '123456');
    await page.$eval('input[id=RepeatPassword]', (el, value) => el.value = value, '123456');

    await page.$eval('button[id=register]', form => form.click());

    expect(page.url()).toBe('http://3.85.171.116:8080/homea');

  });
});

describe("end 2 end test", () => {
  it("test frontend doctor login user and password", async () => {
    await page.goto('http://3.85.171.116:8080/login')
    await Promise.all([
      page.$eval('input[id=email]', (el, value) => el.value = value, 'patient@gmail.com'),
      page.$eval('input[id=password]', (el, value) => el.value = value, '123456'),
      page.$eval('button[id=go]', form => form.click()),

      await page.waitForNavigation(),
    ]);
   

    expect(page.url()).toBe('http://3.85.171.116:8080/homed');
  });
});

describe("end 2 end test", () => {
  it("test frontend click appointment patient", async () => {

    await page.goto('http://3.85.171.116:8080/homep')
    
    await page.$eval('button[id=docapp]', form => form.click());

   
    expect(page.url()).toBe('http://3.85.171.116:8080/appointment');

  });
});

describe("end 2 end test", () => {
  it("test fronten patient complete appointment ", async () => {

    await page.goto('http://3.85.171.116:8080/appointment')
    
    await page.$eval('input[id=app_date]', (el, value) => el.value = value, '12/23/2022');
    await page.$eval('input[id=app_time]', (el, value) => el.value = value, '10.30');
    await page.$eval('input[id=app_arkarn]', (el, value) => el.value = value, 'heartattack');

    await page.$eval('button[id=add]', form => form.click());

    expect(page.url()).toBe('http://3.85.171.116:8080/appointment');

  });
});

describe("end 2 end test", () => {
  it("test frontend click history patient", async () => {

    await page.goto('http://3.85.171.116:8080/homep')
    
    await page.$eval('button[id=doclist]', form => form.click());

    expect(page.url()).toBe('http://3.85.171.116:8080/treatmenthistory');

  });
});

describe("end 2 end test", () => {
  it("test frontend patient click doctorlist", async () => {

    await page.goto('http://3.85.171.116:8080/homep')
    
    await page.$eval('button[id=emlist]', form => form.click());

    
    expect(page.url()).toBe('http://3.85.171.116:8080/listDoctor');

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

