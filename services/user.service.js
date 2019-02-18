import { users, currentUser } from "../models/users";
import { getBooks } from "./bookDetails.service";
import { headers, handleErrors, json, serverUrl } from './config';

const userApi = '/api/user';
const userUrl = serverUrl + userApi;
const booksUrl = userUrl + '/books';


export const getAvailableIds = async (userId) => {
    const books = users[userId].books;
    return books.filter(book => book.available).map(book => book.id);
}

export const getUnavailableIds = async (userId) => {
    const books = users[userId].books;
    return books.filter(book => !book.available).map(book => book.id);
}

export const getUnavailable = async (userId) => {
    return getUnavailableIds(userId).then(getBooks);
}

export const getAvailable = async (userId) => {
    return getAvailableIds(userId).then(getBooks);
}

export const getBalance = async (userId) => {
    const given = users[userId];
    const received = users[userId];
    return {given, received};
}

export const updateBook = async (id, available) => {
    return fetch(booksUrl, {
        method: 'PUT',
        headers,
        body: JSON.stringify({id, available})
    }).then(handleErrors).then(json);
}

export const addBook = async (id, available) => {
    return fetch(booksUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({id, available})
    }).then(handleErrors).then(json);
}

export const deleteBook = async (bookId) => {
    return fetch(booksUrl + '/' + bookId, {
        method: 'DELETE',
        headers,
        body: JSON.stringify({})
    }).then(handleErrors).then(json);
}

export const getMyUser = () => {
    return fetch(userUrl + '/me').then(handleErrors).then(json);
}

export const getUsers = (page = 0) => {
    return fetch(`${userUrl}?page=${page}`).then(handleErrors).then(json);
}
