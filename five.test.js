const five = require('./five');


//passed test cases
test('validateUser',(() => {
    expect(five.validateUser("101","r")).toBe("Valid User");
    expect(five.validateUser("102","r")).toBe("Valid User");
    expect(five.validateUser("103","r")).toBe("Valid User");
    expect(five.validateUser("104","r")).toBe("Invalid User");
}
));