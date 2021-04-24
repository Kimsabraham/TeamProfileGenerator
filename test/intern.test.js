const Intern = require("../lib/Intern");

test("gets school constructor", () => {
  const pass = "fakeCollege";
  const e = new Intern("Bob", 1, "fakeemail@gmail.com", pass);
  expect(e.school).toBe(pass);
});

test('getRole() should return "Intern"', () => {
  const pass = "Intern";
  const e = new Intern("Bob", 1, "fakeemail@gmail.com", "fakeCollege");
  expect(e.getRole()).toBe(pass);
});

test("gets school passes using getSchool()", () => {
  const pass = "fakeCollege";
  const e = new Intern("Bob", 1, "fakegmail@gmail.com", pass);
  expect(e.getSchool()).toBe(pass);
});
