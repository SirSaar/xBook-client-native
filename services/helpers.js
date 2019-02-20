import authStore from "../stores/auth.store";

export const getHeaders = (token) => { return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token && `Bearer ${token}`
} };

export const handleErrors = (response) => {
    if (!response.ok) {
        const error = Error(response.statusText);
        console.log(error)
        if(response.status === 401) authStore.logout();
        throw error;
    }
    return Promise.resolve(response);
}

export const json = response => response.json();