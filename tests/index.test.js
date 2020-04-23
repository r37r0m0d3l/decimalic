const { Decimal, diff, divide, multiply, sum } = require("../dist/decimalic.cjs");

describe("Imported functions", () => {
  it("Decimal", () => {
    expect(typeof Decimal).toBe("function");
  });
  it("diff", () => {
    expect(typeof diff).toBe("function");
  });
  it("divide", () => {
    expect(typeof divide).toBe("function");
  });
  it("multiply", () => {
    expect(typeof multiply).toBe("function");
  });
  it("sum", () => {
    expect(typeof sum).toBe("function");
  });
});

describe("Function results", () => {
  it("diff", () => {
    expect(2.3 - 1.0).toBe(1.2999999999999998);
    expect(diff(2.3, 1.0)).toBe(1.3);
  });
  it("divide", () => {
    expect(355 / 113).toBe(3.1415929203539825);
    expect(divide(355, 113)).toBe(3.1415929203539825);
  });
  it("multiply", () => {
    expect(2232.0 * 0.1).toBe(223.20000000000002);
    expect(multiply(2232.0, 0.1)).toBe(223.2);
  });
  it("sum", () => {
    expect(2.3 + 1.15).toBe(3.4499999999999997);
    expect(sum(2.3, 1.15)).toBe(3.45);
  });
});
