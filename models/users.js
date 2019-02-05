import { book1,book2,book3 } from './books';

const BOOK_STATUS = {
    shelf: 'shelf',
    reading: 'reading'
}

export const users = {
    '077777777': {
        books: {book1 : BOOK_STATUS.shelf, book2: BOOK_STATUS.reading },
        given: 1,
        received: 5
    },
    '075651532': {
        books: {book1 : BOOK_STATUS.shelf, book2: BOOK_STATUS.reading },
        given: 2,
        received: 3
    },
    '058546453': {
        books: {book1 : BOOK_STATUS.shelf, book2: BOOK_STATUS.reading },
        given: 2,
        received: 3

    }
}

export const currentUser = '05352235'