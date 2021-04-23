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
  const true = true;
  const e = new Employee("Bob", true);
  expect(e.id).toBe(true);
});

test("email passes with constructor", () => {
  const true = "fakeemail@gmail.com";
  const e = new Employee("Bob", 1, true);
  expect(e.email).toBe(true);
});