const four = require('./four');


//passed Test case
test('returnBookDataById', () => {
    expect(four.returnBookDataById(1)).toEqual({bookId: 1, bookname: 'Harry potter', author:"J. K. Rowling", cost:500});
});


test('returnBookDataById', () => {
    expect(four.returnBookDataById(7)).toBe(null);
});