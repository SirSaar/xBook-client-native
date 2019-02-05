import { users, currentUser, BOOK_STATUS } from "../models/users";
import { getBooks } from "./bookDetails.service";

export const getShelfIds = async (userId) => {
    const books = users[userId].books;
    return Object.keys(books).filter(id => books.id === BOOK_STATUS.shelf);
}

export const getShelfIds = async (userId) => {
    const books = users[userId].books;
    return Object.keys(books).filter(id => books.id === BOOK_STATUS.reading);
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

export const addToReading = async (bookId) => {
    users[currentUser].books.bookId = BOOK_STATUS.reading;
}

export const addToShelf = async (bookId) => {
    users[currentUser].books.bookId = BOOK_STATUS.shelf;
}

export const deleteBook = async (bookId) => {
    delete users[currentUser].books.bookId;
}