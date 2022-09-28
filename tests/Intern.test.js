const Intern = require('../lib/Intern.js');

describe("Intern", () => {
    describe("Intern", () =>{
        it ("Should return an object containing a 'name' when called with new keyword", ()=>{
            const intern = new Intern();
            expect("name" in intern).toEqual(true);
        });

        it ("Should return an object containing a 'id', with new keyword", ()=>{
            const intern = new Intern();
            expect("id" in intern).toEqual(true);
        });


        it ("Should return an object containing a 'email', with new keyword", ()=>{
            const intern = new Intern();
            expect("email" in intern).toEqual(true);
        });

        
        it ("Should return an object containing a 'Engineer', with new keyword", ()=>{
            const intern = new Intern();
                 
            expect(intern.getRole()).toEqual('Intern');
        });
    });

});