const cleanseBook = (book) => {
    const newBook={};
    newBook.id=book.id;
    newBook.title=book.volumeInfo.title;
    newBook.thumbnail=book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail
    newBook.author=book.volumeInfo.authors && book.volumeInfo.authors.join(', ');
    newBook.more=book.volumeInfo.infoLink;
    return newBook;
}

export const searchBook = async (bookName) => {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&projection=lite`);
    const resJson = await res.json();
    const books = resJson.items;
    const fewBooks = books.slice(0, 4);
    const formattedBooks = fewBooks.map(cleanseBook);
    return formattedBooks;
}

export const getBook = async (id) => {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}&projection=lite`);
    const book = await res.json();
    const formattedBook = book.map(cleanseBook);
    return formattedBook;
}