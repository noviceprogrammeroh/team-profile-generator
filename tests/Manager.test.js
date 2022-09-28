const Manager = require('../lib/Manager.js');

describe("Manager", () => {
    describe("Manager", () =>{
   
        it ("Should return an object containing a 'name', 'id', and 'email' when called with new keyword", ()=>{
            const manager = new Manager('Robert', 2, 'nofake@.noemail.com', '25B')
            expect(manager.getOfficeNumber()).toEqual('25B')
            expect(manager.getRole()).toEqual('Manager')
        });

    });

});