const Employee = require("./Employee.js");

class Engineer extends Employee {

    constructor(github){
        super('username');
        github = this.github;

    }


    getGithub(){
        return this.github;
    }

    getRole(){
        return this.getRole;

    }
    

}