import { token } from '../stores/auth.store';

export const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`, 
};

export const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const json = response => response.json();

export const serverUrl = 'https://glacial-fortress-14735.herokuapp.com';