import axios from 'axios';
import React, { Component } from 'react';

import './auth.css';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach((val) => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach((val) => {
        val === null && (valid = false);
    });

    return valid;
};

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
            formErrors: {
                email: '',
                password: '',
            },
        };
    }

    handleSubmit = (e) => {
        const API_URL = '/api/users/';

        const payload = {
            email: this.state.email,
            password: this.state.password,
        };

        axios
            .post(API_URL + 'login', payload)
            .then(function (response) {
                console.log(response);
                if (response.status === 0) {
                    console.log(`--SUBMITTING--
                        Email: ${this.state.email}
                        Password: ${this.state.password}`);
                } else if (response.code === 204) {
                    console.log('Username password do not match');
                    alert('username password do not match');
                } else {
                    if (response.status === 200) {
                        console.log(response.data);
                        alert('you are logged in');
                    } else {
                        console.log('Username does not exists');
                        alert('Username does not exist');
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case 'email':
                formErrors.email = emailRegex.test(value)
                    ? ''
                    : 'invalid email address';
                break;
            case 'password':
                formErrors.password =
                    value.length < 2 ? 'minimum 5 characters required' : '';
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () =>
            console.log(this.state)
        );
    };

    render() {
        const { formErrors } = this.state;

        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Login</h1>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input
                            className={
                                formErrors.email.length > 0 ? 'error' : null
                            }
                            placeholder="Email"
                            type="email"
                            name="email"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {formErrors.email.length > 0 && (
                            <span className="errorMessage">
                                {formErrors.email}
                            </span>
                        )}
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input
                            className={
                                formErrors.password.length > 0 ? 'error' : null
                            }
                            placeholder="Password"
                            type="password"
                            name="password"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {formErrors.password.length > 0 && (
                            <span className="errorMessage">
                                {formErrors.password}
                            </span>
                        )}
                    </div>
                    <div className="createAccount">
                        <button onClick={this.handleSubmit}>
                            Create Account
                        </button>
                        <small>No Account yet?</small>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
