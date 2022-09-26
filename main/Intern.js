const Employee = require("./Employee.js");

class Intern extends Employee{

    constructor(id, school, name,) {
     super(id, school, 'Hector')
     school = this.school;

    }

    getSchool(){
        return this.school;
    }

    getName(){
        return this.name;
    }

    getRole() {
        return this.intern;
    }






}