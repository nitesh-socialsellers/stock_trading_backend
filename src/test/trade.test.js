const request = require("supertest");
const app = require("../../server");

describe("Trade API Tests", () => {
  it("Should create a new buy trade", async () => {
    const res = await request(app).post("/api/trades").send({
      stock_name: "Tesla",
      quantity: 100,
      broker_name: "Broker B",
      price: 170,
    });
    expect(res.statusCode).toEqual(201);
  });

  it("Should fetch all trades", async () => {
    const res = await request(app).get("/api/trades");
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
