import { users, currentUser, BOOK_STATUS } from "../models/users";
import { getBooks } from "./bookDetails.service";

export const getShelfIds = async (userId) => {
    const books = users[userId].books;
    return books.filter(book => book.status === BOOK_STATUS.shelf).map(book => book.id);
}

export const getReadingIds = async (userId) => {
    const books = users[userId].books;
    return books.filter(book => book.status === BOOK_STATUS.reading).map(book => book.id);
}

export const getReading = async (userId) => {
    return getReadingIds(userId).then(getBooks);
}

export const getShelf = async (userId) => {
    return getShelfIds(userId).then(getBooks);
}

export const getBalance = async (userId) => {
    const given = users[userId];
    const received = users[userId];
    return {given, received};
}

export const changeBookStatus = async (bookId, status) => {
    const book = users[currentUser].books.find(book => book.id === bookId);
    book.status = BOOK_STATUS[status];
}

export const addBook = async (bookId, status) => {
    users[currentUser].books.push({id: bookId, status});
}

export const deleteBook = async (bookId) => {
    const index = users[currentUser].books.findIndex(book => book.id === bookId);
    users[currentUser].books.splice(index,1);
}