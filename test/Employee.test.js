const Employee = require("../lib/employee");

test("Employee instance works", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});
