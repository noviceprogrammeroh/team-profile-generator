const Employee = require("./Employee.js");

class Manager extends Employee{


     constructor(name, id, email, officeNumber) {
     super(name, id, email);
     this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return console.log(`Office number : ${this.officeNumber}`);
    }



    getRole() {
        return console.log('role : Manager');
    }
    


    }

    module.exports = Manager;
    







