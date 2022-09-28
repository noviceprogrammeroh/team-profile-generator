const Employee = require("./Employee.js");

class Engineer extends Employee {

    constructor(name, id, email, github,){
       super(name, id, email);
       this.github = github;
    }


    getGitHub() {
        return console.log(`Github User : ${this.github}`);
    }
  
    getRole() {
        return console.log('role : Engineer');
    }
       

}
module.exports = Engineer;