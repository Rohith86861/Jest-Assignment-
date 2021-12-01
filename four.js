const four={
    arrayOfFiveObjects: [
        {bookId: 1, bookname: 'book1', author:'author1', cost:400},
        {bookId: 2, bookname: 'book2', author:'author2', cost:100},
        {bookId: 3, bookname: 'book3', author:'author3', cost:400},
        {bookId: 4, bookname: 'book4', author:'author4', cost:340},
        {bookId: 5, bookname: 'book5', author:'author5', cost:230}
    ],


    returnBookDataById: function(bookId){
        let bookData = null;
        this.arrayOfFiveObjects.forEach(function(book){
            if(book.bookId === bookId){
                bookData = book;
            }
        });
        return bookData;
    }
}

module.exports=four;