var three = require('./three');


//passed test case
test('returnBookDataById', () => {
    expect(three.returnBookDataById(1)).not.toBeNull();
});