const Employee = require("./lib/Employee.js");
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

const employee = new Employee('John', 1, 'noemail@noemail.ccom');
const engineer = new Engineer('Mike', 2, 'nofake@.noemail.com', 'novicehub')
const manager = new Manager('Robert', 3, 'nofake@.noemail.com', '25B')
const intern = new Intern('Rose', 4, 'newintern@email.com', 'communitycollege@nocollege')

//testing Employee
employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();
console.log(employee);

console.log("")
//Manager
manager.getName();
manager.getId();
manager.getEmail();
manager.getOfficeNumber();
manager.getRole();
console.log(manager);

console.log("")
//engineer
engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getGitHub();
engineer.getRole();
console.log(engineer);

console.log("")
//intern
intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();
intern.getRole();
console.log(intern);














