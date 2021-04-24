const Engineer = require("../lib/Engineer");

test("GitHub constructor", () => {
  const pass = "GitHubUser";
  const e = new Engineer("Bob", 1, "fakeEmail@gmail.com", pass);
  expect(e.github).toBe(pass);
});

test('getRole() should return "Engineer"', () => {
  const pass = "Engineer";
  const e = new Engineer("Bob", 1, "fakeEmail@gmail.com", "GitHubUser");
  expect(e.getRole()).toBe(pass);
});

test("passes GitHub user by passing getGithub()", () => {
  const pass = "GitHubUser";
  const e = new Engineer("Bob", 1, "fakeEmail@gmail.com", pass);
  expect(e.getGithub()).toBe(pass);
});
