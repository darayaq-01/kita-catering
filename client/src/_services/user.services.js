import axios from 'axios'
import { authHeader } from '../_helpers/auth-header';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

const API_URL = "http://localhost:5000/api/users"

function login(email, password) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`${API_URL}/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            console.log(user)

            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });

    /*  axios
         .post(API_URL + 'login', { email, password })
         .then(function (handleResponse) {
             console.log(handleResponse);
             if (handleResponse.status === 0) {
             } else if (handleResponse.code === 204) {
                 console.log('Username password do not match');
                 alert('username password do not match');
             } else {
                 if (handleResponse.status === 200) {
                     console.log(handleResponse.data);
                     alert('you are logged in');
                 } else {
                     console.log('Username does not exists');
                     alert('Username does not exist');
                 }
             }
         })
         .then(user => {
             // store user details and jwt token in local storage to keep user logged in between page refreshes
             localStorage.setItem('user', JSON.stringify(user));
             return user;
         })
         .catch(function (error) {
             console.log(error);
         }); */
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${API_URL}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${API_URL}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${API_URL}/users/register`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${API_URL}/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${API_URL}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {

                // auto logout if 401 response returned from api
                logout();

                // eslint-disable-next-line no-restricted-globals
                location.reload();

            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}