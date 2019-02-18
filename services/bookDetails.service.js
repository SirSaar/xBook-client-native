import * as googleBooks from './googleBooks.serivce';

export const getBook = (id) => {
    return googleBooks.getBookById(id);
}

export const searchBook = (bookName) => {
    return googleBooks.searchBook(bookName);
}

export const getBooks = (booksId) => {
    return Promise.all(booksId.map(getBook))
}