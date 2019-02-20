import {observable, autorun, action, computed} from 'mobx';
import * as userApi from "../services/user.service";

const _getBooks = (user,available) => user.books.filter(
    book => book.available == available
).map(book=>book.data);

class UserStore {
    @observable users = [];     // users.books will be with only available books
    @observable isLoadingUsers;
    @observable currentUser;    // users.books will be with all books: {book,available}
    @observable isLoadingCurrentUser;
    @observable selectedUser;
    @observable isLoadingSelectedUser;
    usersPage = 0;

    @computed get availableBooks() {
        return _getBooks(this.currentUser, true)
    }

    @computed get nonAvailableBooks() {
        return _getBooks(this.currentUser, false)
    }

    @action pullCurrentUser = () => {
        this.isLoadingCurrentUser = true;
        return userApi.getMyUser()
        .then( action(user => { this.currentUser = user; }) )
        .finally(action(() => { this.isLoadingCurrentUser = false; }));
    }

    @action pullSelectedUser(id) {
        this.isLoadingSelectedUser = true;
        return userApi.getUser(id)
        .then( action(user => { this.selectedUser = user }) )
        .finally(action(() => { this.isLoadingSelectedUser = false }));
    }

    @action pullUsers() {
        this.isLoadingUsers = true;
        return userApi.getUsers(usersPage)
        .then( action(users => { this.users.push(users) }) )
        .finally(action(() => { this.isLoadingUsers = false; this.usersPage++; }));
    }

    @action addBook(id, available) {
        this.currentUser.books.push({id: id, available});
        return userApi.addBook(id, isAvailable)
        .catch(action(err => { this.pullCurrentUser(); throw err }));
    }

    @action updateBook(id, available) {
        const book = this.currentUser.books.find(book => book.id === id);
        book.available = available;
        return userApi.updateBook(id, isAvailable)
        .catch(action(err => { this.pullCurrentUser(); throw err }));
    }


    @action deleteBook(id) {
        const index = this.currentUser.books.findIndex(book => book.id === id);
        if(index > -1) this.currentUser.books.splice(index,1);
        return userApi.deleteBook(id)
        .catch(action(err => { this.pullCurrentUser(); throw err }));
    }

    @action forgetCurrentUser() {
        this.currentUser = undefined;
    }

}

export default new UserStore();