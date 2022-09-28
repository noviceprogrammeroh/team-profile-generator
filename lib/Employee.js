class Employee {


constructor(name, id, email,) {
    this.name = name;
    this.id = id;
    this.email = email;
}

getName(){
    return console.log(`name : ${this.name}`);
}

getId(){
    return console.log(`id : ${this.id}`);
}

getEmail(){
    return console.log(`email : ${this.email}`);
}


getRole(){
    return console.log('role : Employee');
}



}
module.exports = Employee;