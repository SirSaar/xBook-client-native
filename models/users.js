import { book1,book2,book3 } from './books';

export const BOOK_STATUS = {
    shelf: 'shelf',
    reading: 'reading'
}

export const users = {
    '077777777': {
        books: [{id : book1 ,status: BOOK_STATUS.shelf}, {id : book2 ,status: BOOK_STATUS.reading }, {id : book3 ,status: BOOK_STATUS.reading}],
        given: 1,
        received: 5
    },
    '075651532': {
        books: [{id : book1 ,status: BOOK_STATUS.shelf}, {id : book2 ,status: BOOK_STATUS.reading }, {id : book3 ,status: BOOK_STATUS.reading}],
        given: 2,
        received: 3
    },
    '058546453': {
        books: [{id : book1 ,status: BOOK_STATUS.shelf}, {id : book2 ,status: BOOK_STATUS.reading }, {id : book3 ,status: BOOK_STATUS.reading}],
        given: 2,
        received: 3

    }
}

export const currentUser = '075651532'