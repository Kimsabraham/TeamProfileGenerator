const Employee = require("../lib/employee");

test("Can instantiate employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("name passes with constructor", () => {
  const name = "Bob";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});