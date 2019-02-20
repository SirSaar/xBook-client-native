import {observable, autorun, action} from 'mobx';
import { AsyncStorage } from "react-native"
import { authCookie } from "../config";
import userStore from './user.store';

class AuthStore {
    @observable token;
    @observable isLoading = false;

    @action setToken(token) {
        this.isLoading = true;
        return AsyncStorage.setItem(authCookie, token)
        .then( this._saveToken )
        .finally( action(() => {this.isLoading = false}) );
    }

    @action logout() {
        this.isLoading = true;
        return AsyncStorage.removeItem(authCookie)
        .then( this._saveToken(null) )
        .then(userStore.forgetCurrentUser)
        .finally( action(() => {this.isLoading = false}) );
    }

    @action loadToken() {
        this.isLoading = true;
        return AsyncStorage.getItem(authCookie)
        .then( this._saveToken )
        .finally( action(() => {this.isLoading = false}) );
    }

    @action _saveToken = (token) => {
        this.token = token;
        console.log('_saveToken',token)
        token && userStore.pullCurrentUser();
        return Promise.resolve(token);
    }

}

export default new AuthStore();