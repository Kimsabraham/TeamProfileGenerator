const Manager = require("../lib/Manager");
const Employee = require("../lib/employee");

test("office number constructor argument", () => {
  const pass = 100;
  const e = new Manager("Bob", 1, "fakeemail@gmail.com", pass);
  expect(e.officeNumber).toBe(pass);
});

test('getRole() should return "Manager"', () => {
  const pass = "Manager";
  const e = new Manager("Bob", 1, "pass", 100);
  expect(e.getRole()).toBe(pass);
});

test("passes office number by  getOffice()", () => {
  const pass = 100;
  const e = new Manager("Bob", 1, "test@test.com", pass);
  expect(e.getOfficeNumber()).toBe(pass);
});
