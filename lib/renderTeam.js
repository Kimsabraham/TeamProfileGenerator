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
