const seven = require('./seven');



test('Valid Registration', ()=>{

    expect(seven.register("101","rohith")).toEqual("Registration successful");

});

test('Valid User Login', ()=>{
    expect(seven.login("102","varun")).toEqual("Valid User logged in");

});