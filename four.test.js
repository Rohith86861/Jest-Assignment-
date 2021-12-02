const four = require('./four');


//passed Test case
test('returnBookDataById', () => {
    expect(four.returnBookDataById(1)).toEqual({bookId: 1, bookname: 'book1', author:"author1", cost:400});
});


test('returnBookDataById', () => {
    expect(four.returnBookDataById(7)).toBe(null);
});
