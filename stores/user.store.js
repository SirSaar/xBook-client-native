import {observable, autorun} from 'mobx';
import { getMyUser, getUsers, addBook, updateBook, deleteBook } from "../services/user.service";

export class UserStore {
    @observable users = [];
    @observable isLoadingUsers;
    @observable currentUser;
    @observable isLoadingCurrentUser;
    page = 0;
    
    @action pullCurrentUser() {
        this.isLoadingCurrentUser = true;
        return getMyUser().then( action(user => { this.currentUser = user }) )
        .finally(action(() => { this.isLoadingCurrentUser = false }));
    }

    @action pullUsers() {
        this.isLoadingUsers = true;
        return getUsers(page).then( action(users => { this.users.push(users) }) )
        .finally(action(() => { this.isLoadingUsers = false; this.page++; }));
    }

    @action addBook(id, available) {
        this.currentUser.books.push({id: id, available});
        return addBook(id, isAvailable)
        .catch(action(err => { this.pullCurrentUser(); throw err }));
    }

    @action updateBook(id, available) {
        const book = this.currentUser.books.find(book => book.id === id);
        book.available = available;
        return updateBook(id, isAvailable)
        .catch(action(err => { this.pullCurrentUser(); throw err }));
    }


    @action deleteBook(id) {
        const index = this.currentUser.books.findIndex(book => book.id === id);
        if(index > -1) this.currentUser.books.splice(index,1);
        return deleteBook(id)
        .catch(action(err => { this.pullCurrentUser(); throw err }));
    }
}