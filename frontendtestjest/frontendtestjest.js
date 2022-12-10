const browser = "http://petchrh.sytes.net:8080/login"

describe("GET /login", () => {
    it("test /login page should return 200", async () => {
      const response = await request(browser).get("/login");
      expect(response.statusCode).toBe(200);
    });
  });
  
  describe("GET /homed", () => {
    it("test /homed page should return 200", async () => {
      const response = await request(browser).get("/homed");
      expect(response.statusCode).toBe(200);
    });
  });
   
  describe("GET /appointment", () => {
    it("test /appointment page should return 200", async () => {
      const response = await request(browser).get("/appointment");
      expect(response.statusCode).toBe(200);
    });
  });
   
  describe("GET /historylist", () => {
    it("test /historylist page should return 200", async () => {
      const response = await request(browser).get("/historylist");
      expect(response.statusCode).toBe(200);
    });
  });
   
  describe("GET /login", () => {
    it("test /login page should return 200", async () => {
      const response = await request(browser).get("/homed");
      expect(response.statusCode).toBe(200);
    });
  });