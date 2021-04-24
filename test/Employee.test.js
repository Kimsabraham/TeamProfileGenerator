const Employee = require("../lib/Employee");

test("Employee instance works", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("name passes with constructor", () => {
  const name = "Bob";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("id passes with constructor", () => {
  const pass = 100;
  const e = new Employee("Bob", pass);
  expect(e.id).toBe(pass);
});

test("email passes with constructor", () => {
  const pass = "fakeemail@gmail.com";
  const e = new Employee("Bob", 1, pass);
  expect(e.email).toBe(pass);
});

test("getName argument passes()", () => {
  const pass = "Bob";
  const e = new Employee(pass);
  expect(e.getName()).toBe(pass);
});

test("getId arguemnt passes()", () => {
  const pass = 100;
  const e = new Employee("Bob", pass);
  expect(e.getId()).toBe(pass);
});

test("getEmail argument passes()", () => {
  const pass = "fakeemail@gmail.com";
  const e = new Employee("Bob", 1, pass);
  expect(e.getEmail()).toBe(pass);
});

test('getRole() "employee"', () => {
  const pass = "employee";
  const e = new Employee("Bob", 1, "fakeemail@gmail.com");
  expect(e.getRole()).toBe(pass);
});
