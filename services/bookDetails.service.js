import * as googleBooks from './googleBooks.serivce';

export const getBook = async (id) => {
    return await googleBooks.getBook(id);
}

export const searchBook = async (bookName) => {
    return await googleBooks.searchBook(bookName);
}

export const getBooks = async (booksId) => {
    return await Promise.all(booksId.map(getBook))
}