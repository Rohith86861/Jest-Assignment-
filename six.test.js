const registeration = require('./six');



test('Valid Registration', ()=>{
    uid="101";
    pwd="rohith";
    role="admin";
    var result = registeration(uid,pwd,role);

    expect(registeration(uid,pwd,role)).toEqual("Registration successful");

});