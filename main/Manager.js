const Employee = require("./Employee.js");

class Manager extends Employee{


     constructor(officeNumber) {
     super('employee');
     officeNumber = this.officeNumber;
    }



    getRole() {
        return 'manager';
    }
    


    }
    







