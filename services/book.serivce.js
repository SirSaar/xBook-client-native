export const searchBook = async (bookName) => {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`);
    
    const resJson = await res.json();

    const books = resJson.items;
    const fewBooks = books.slice(0, 4);
    const formattedBooks = fewBooks.map((book) => {
        const newBook={};
        newBook.id=book.id;
        newBook.title=book.volumeInfo.title;
        newBook.thumbnail=book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail
        newBook.author=book.volumeInfo.authors && book.volumeInfo.authors.join(', ');
        newBook.more=book.volumeInfo.infoLink;
        return newBook;
      })
    return formattedBooks;
}