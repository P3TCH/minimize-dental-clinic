const request = require('supertest');
const baseURL = "http://3.83.202.236:8080"

describe('GET /', () => {
  it('respond with 200', async () => {
    const respond = await request(baseURL).get('/');
    expect(respond.statusCode).toBe(200);
  });
});

describe('GET /login', () => {
  it('respond with 200', async () => {
    const respond = await request(baseURL).get('/login');
    expect(respond.statusCode).toBe(200);
  });
});

describe('GET /signup', () => {
  it('respond with 200', async () => {
    const respond = await request(baseURL).get('/signup');
    expect(respond.statusCode).toBe(200);
  });
});

describe('GET /homea', () => {
  it('respond with 200', async () => {
    const respond = await request(baseURL).get('/homea');
    expect(respond.statusCode).toBe(200);
  });
});

describe('GET /homed', () => {
  it('respond with 200', async () => {
    const respond = await request(baseURL).get('/homed');
    expect(respond.statusCode).toBe(200);
  });
});

describe('GET /homep', () => {
  it('respond with 200', async () => {
    const respond = await request(baseURL).get('/homep');
    expect(respond.statusCode).toBe(200);
  });
});

describe('GET /edituser', () => {
  it('respond with 200', async () => {
    const respond = await request(baseURL).get('/edituser');
    expect(respond.statusCode).toBe(200);
  });
});

describe('GET /editdoc', () => {
  it('respond with 200', async () => {
    const respond = await request(baseURL).get('/editdoc');
    expect(respond.statusCode).toBe(200);
  });
});

describe('GET /appointment', () => {
  it('respond with 200', async () => {
    const respond = await request(baseURL).get('/appointment');
    expect(respond.statusCode).toBe(200);
  });
});

describe('GET /profileDoc', () => {
  it('respond with 200', async () => {
    const respond = await request(baseURL).get('/profileDoc');
    expect(respond.statusCode).toBe(200);
  });
});

describe('GET /profileP', () => {
  it('respond with 200', async () => {
    const respond = await request(baseURL).get('/profileP');
    expect(respond.statusCode).toBe(200);
  });
});

describe('GET /treatmenthistory', () => {
  it('respond with 200', async () => {
    const respond = await request(baseURL).get('/treatmenthistory');
    expect(respond.statusCode).toBe(200);
  });
});

describe('GET /listDoctor', () => {
  it('respond with 200', async () => {
    const respond = await request(baseURL).get('/listDoctor');
    expect(respond.statusCode).toBe(200);
  });
});

describe('GET /listEmployee', () => {
  it('respond with 200', async () => {
    const respond = await request(baseURL).get('/listEmployee');
    expect(respond.statusCode).toBe(200);
  });
});

describe('GET /appointmentDoc', () => {
  it('respond with 200', async () => {
    const respond = await request(baseURL).get('/appointmentDoc');
    expect(respond.statusCode).toBe(200);
  });
});

describe('GET /signupDoc', () => {
  it('respond with 200', async () => {
    const respond = await request(baseURL).get('/signupDoc');
    expect(respond.statusCode).toBe(200);
  });
});

describe('GET /signupAdmin', () => {
  it('respond with 200', async () => {
    const respond = await request(baseURL).get('/signupAdmin');
    expect(respond.statusCode).toBe(200);
  });
});

describe('GET /appointmentEmp', () => {
  it('respond with 200', async () => {
    const respond = await request(baseURL).get('/appointmentEmp');
    expect(respond.statusCode).toBe(200);
  });
});

describe('POST /login_api correct password ', () => {
  it('respond message "login success"', async () => {
    const respond = await request(baseURL).post('/login_db').send({
      email: "petch@gmail.com", password: "123456"
    });
    let data = JSON.parse(respond.text);
    expect(data.message).toBe('login success');
  });
});

describe('POST /login_api wrong password', () => {
  it('respond message "wrong password"', async () => {
    const respond = await request(baseURL).post('/login_db').send({
      email: "petch@gmail.com", password: "1"
    });
    let data = JSON.parse(respond.text);
    expect(data.message).toBe('wrong password');
  });
});

describe('POST /getinfo_db', () => {
  it('respond message "get info success"', async () => {
    const respond = await request(baseURL).post('/getinfo_db').send({
      userid_check: "1"
    });
    let data = JSON.parse(respond.text);
    console.log(data);
  });
});
