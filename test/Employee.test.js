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

test("id passes with constructor", () => {
  const pass = true;
  const e = new Employee("Bob", pass);
  expect(e.id).toBe(pass);
});

test("email passes with constructor", () => {
  const pass = "fakeemail@gmail.com";
  const e = new Employee("Bob", 1, pass);
  expect(e.email).toBe(pass);
});