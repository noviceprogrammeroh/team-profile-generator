const Employee = require("./Employee.js");

class Intern extends Employee{

    constructor(name, id, email, school,) {
     super(name, id, email, school,)
     this.school = school;

    }

    getSchool(){
        return console.log(`school name : ${this.school}`);
    }

    getRole(){
        return console.log('Role: Intern')
    }



}
module.exports = Intern;