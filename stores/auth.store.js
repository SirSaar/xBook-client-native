import {observable, autorun} from 'mobx';
import { AsyncStorage } from 'react-native';

export class AuthStore {
    @observable token;
    @observable isLoading;

    @action setToken(token) {
        this.isLoading = true;
        AsyncStorage.setItem('authToken', authToken)
        .then( action(() => {this.token = token}) )
        .finally( action(() => {this.isLoading = false}) );
    }

    @action logout() {
        this.isLoading = true;
        AsyncStorage.removeItem('authToken')
        .then( action(() => {this.token = undefined}) )
        .finally( action(() => {this.isLoading = false}) );
    }

    @action loadToken() {
        this.isLoading = true;
        AsyncStorage.getItem('authToken')
        .then( action((token) => {this.token = token}) )
        .finally( action(() => {this.isLoading = false}) );
    }

}