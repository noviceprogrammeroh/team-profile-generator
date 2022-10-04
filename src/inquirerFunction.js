//import inquirer
const inquirer = require("inquirer");
const fs = require("fs");

//import models
const Engineer = require("../lib/Engineer.js");
const Manager = require("../lib/Manager.js");
const Intern = require("../lib/Intern.js");

//array that will hold employees
const teamEmployees = [];

function init() {

  startMainHtmlCode();
  addTeamMember();

  function addTeamMember() {
    inquirer
      .prompt([
        {
          type: 'input',   
          message: "Please enter team member's name",
          name: "name",
          validate: nameEntered => {
           if(nameEntered === "") {
            console.log("");
            console.log("\n  Name field cannot be empty!! Please Try again")
            console.log("");
              return false;
          }else{
            return true;
          }
        }
        },
        {
          type: "list",
          message: "Choose team member's role",
          choices: ["Engineer", "Intern", "Manager"],
          name: "role",
        },
        {
          type: 'input',
          message: "Please enter team member's id",
          name: "id",
        },
        {
          type: 'input',
          message: "Please enter team member's email address",
          name: "email",
        },
      ])
      .then(({ name, role, id, email }) => {
        let roleInfo = "";
        if (role === "Engineer") {
          roleInfo = "GitHub username";
        } else if (role === "Intern") {
          roleInfo = "school name";
        } else {
          roleInfo = "office number";
        }
        inquirer
          .prompt([
            {
              type: 'input',
              message: `Please enter team member's ${roleInfo}`,
              name: "roleInfo",
            },
            {
              type: "list",
              message: "Do you want to add another team member?",
              choices: ["yes", "no"],
              name: "addMoreMembers",
            },
          ])
          .then(({ roleInfo, addMoreMembers }) => {
            let member;
            if (role === "Engineer") {
              member = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
              member = new Intern(name, id, email, roleInfo);
            } else {
              member = new Manager(name, id, email, roleInfo);
            }
            teamEmployees.push(member);
            addHtmlCode(member).then(function () {
              if (addMoreMembers === "yes") {
                addTeamMember();
              } else {
                finishHtml();
              }
            });
          });
      });
  }

  function startMainHtmlCode() {
    const createHtml = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/style.css">
        <title>Team Generator Application</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Generator Application</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("../dist/index.html", createHtml, (err) => {
      if (err) {
        console.log(err);
      }
    });
    }

  const addHtmlCode = (member) => {
    return new Promise(function (resolve, reject) {
      const role = member.getRole();
      let data = "";
      if (role === "Engineer") {
        data = `<div class="col-6">
            <div class="card  mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${member.name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${member.id}</li>
                <li class="list-group-item">Email:
                <a href="mailto:${member.email}">${member.email}</a></li>
                <li class="list-group-item">Github:
                <a href = "https://github.com/${member.getGithub()}">${member.getGithub()}</a></li>
            </ul>
            </div>
        </div>`;
      } else if (role === "Intern") {
        data = `<div class="col-6">
            <div class="card  mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${member.name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${member.id}</li>
                <li class="list-group-item">Email:
                <a href="mailto:${member.email}">${member.email}</a></li>
                <li class="list-group-item">School: ${member.getSchool()}</li>
            </ul>
            </div>
        </div>`;
      } else {
        const officePhone = member.getOfficeNumber();
        data = `<div class="col-6">
            <div class="card  mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${member.name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${member.id}</li>
                <li class="list-group-item">Email:
                <a href="mailto:${member.email}">${member.email}</a></li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`;
      }

      fs.appendFile("../dist/index.html", data, (err) =>{
        if (err) {
          return reject(err);
        }
        return resolve();
      });
    });
  };

  const finishHtml = () => {
    const html = ` </div>
    </div>
    </body>
</html>`;

    fs.appendFile("../dist/index.html", html, function (err) {
      if (err) {
        console.log(err);
      }
    });
    console.log("end");
  };
}
init();
