const path = require("path");
const fs = require("fs");

const templatePath = path.resolve(__dirname, "../templates");

const render = (employees) => {
  const html = [];

  html.push(
    employees
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => renderManager(manager))
  );
  html.push(
    employees
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => renderEngineer(engineer))
  );
  html.push(
    employees
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => renderIntern(intern))
  );

  return renderMain(html.join(""));
};

const renderManager = (manager) => {
  let template = fs.readFileSync(
    path.resolve(templatePath, "manager.html"),
    "utf8"
  );
  template = userAnswer(template, "name", manager.getName());
  template = userAnswer(template, "role", manager.getRole());
  template = userAnswer(template, "email", manager.getEmail());
  template = userAnswer(template, "id", manager.getId());
  template = userAnswer(template, "officeNumber", manager.getOfficeNumber());
  return template;
};


const renderMain = (html) => {
  const template = fs.readFileSync(
    path.resolve(templatePath, "main.html"),
    "utf8"
  );
  return userAnswer(template, "team", html);
};

const userAnswer = (template, userAnswer, value) => {
  const pattern = new RegExp("{{ " + userAnswer + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;
