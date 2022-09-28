const Engineer = require('../lib/Engineer.js');

describe("Engineer", () => {
    describe("Engineer", () =>{
        it ("Should return an object containing a 'name' when called with new keyword", ()=>{
            const engineer = new Engineer();
            expect("name" in engineer).toEqual(true);
        });

        it ("Should return an object containing an 'id', with new keyword", ()=>{
            const engineer = new Engineer();
            expect("id" in engineer).toEqual(true);
        });


        it ("Should return an object containing an 'email', with new keyword", ()=>{
            const engineer = new Engineer();
            expect("email" in engineer).toEqual(true);
        });

        it ("Should return an object containing a 'github', with new keyword", ()=>{
            const engineer = new Engineer();
            expect('github' in engineer).toEqual(true);
        });

        
        it ("Should return an object containing an 'Engineer', with new keyword", ()=>{
            const engineer = new Engineer();
                 
            expect(engineer.getRole()).toEqual('Engineer');
        });
    });

});