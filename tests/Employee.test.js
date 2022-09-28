const Employee = require("../lib/Employee.js")


describe("Employee", () => {
    describe("Employee", () =>{
        it ("Should return an object containing a 'name' when called with new keyword", ()=>{
            const emp = new Employee();
            expect("name" in emp).toEqual(true);
        });

        it ("Should return an object containing a 'id', with new keyword", ()=>{
            const emp = new Employee();
            expect("id" in emp).toEqual(true);
        });
    });

 
})