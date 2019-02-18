import { getBook } from "./bookDetails.service";
import { headers, handleErrors, json } from './config';
import { serverUrl } from '../config';

const userApi = '/api/user';
const userUrl = serverUrl + userApi;
const booksUrl = userUrl + '/books';

const populateUserBooks = async (user) => {
    user.books.map(book => book.data = await getBook(book.id));
    return user;
}

const populateUsersBooks = async (users) => {
    const newUsers = users.map( user => user.books.map(book => await getBook(book.id)) );
    return newUsers;
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
    return fetch(userUrl + '/me')
    .then(handleErrors).then(json)
    .then(populateUserBooks);
}

export const getUsers = (page = 0) => {
    return fetch(`${userUrl}?page=${page}`)
    .then(handleErrors).then(json)
    .then(populateUsersBooks);
}

export const getUser = (id) => {
    return fetch(`${userUrl}/${id}`)
    .then(handleErrors).then(json)
    .then(populateUserBooks);
}
