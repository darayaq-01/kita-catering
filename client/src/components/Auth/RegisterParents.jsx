import axios from 'axios';
import React, { Component } from 'react';

import './auth.css';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const numberRegex = RegExp(/^[0-9]*$/);

function formValid({ formErrors, ...rest }) {
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
}

class RegisterParents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            secondName: null,
            email: null,
            address: {
                street: null,
                houseNumber: null,
                postalCode: null,
                location: null,
            },
            password: null,
            formErrors: {
                firstName: '',
                lastName: '',
                email: '',
                address: {
                    street: '',
                    houseNumber: '',
                    postalCode: '',
                    location: '',
                },
                password: '',
            },
        };
    }

    handleSubmit = (e) => {
        const API_URL = '/api/users/';

        const payload = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            address: {
                street: this.state.address.street,
                houseNumber: this.state.address.houseNumber,
                postalCode: this.state.address.postalCode,
                location: this.state.address.location,
            },
            password: this.state.password,
        };

        axios
            .post(API_URL, payload)
            .then(function (response) {
                console.log(response);
                if (response.status === 0) {
                    console.log(`--SUBMITTING--
                    First Name: ${this.state.firstName}
                    Last Name: ${this.state.lastName}
                    Email: ${this.state.email}
                    Address: {
                        Street: ${this.state.address.street}
                        House Number: ${this.state.address.houseNumber}
                        Postal code: ${this.state.address.postalCode}
                        Location: ${this.state.address.location}
                    }
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
        let name = e.target.name.split('.'); //string 'address.street' => ['address', 'street]
        if (name.length > 1) {
            this.setState({
                ...this.state,
                [name[0]]: {
                    ...this.state[name[0]],
                    [name[1]]: e.target.value,
                },
            });
        } else {
            this.setState({ ...this.state, [e.target.name]: e.target.value });
        }
    };

    /*  this.setState({ formErrors, [name]: value }, () =>
            console.log(this.state)
        ); 
    };*/

    render() {
        /* const  { formErrors }  = this.state; */

        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Register User</h1>

                    <div className="firstName">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            /*  className={
                                formErrors.firstName.length > 0 ? 'error' : null
                            } */
                            placeholder="First Name"
                            type="text"
                            name="firstName"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {/* {formErrors.firstName.length > 0 && (
                            <span className="errorMessage">
                                {formErrors.firstName}
                            </span>
                        )} */}
                    </div>
                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            /* className={
                                formErrors.lastName.length > 0 ? 'error' : null
                            } */
                            placeholder="Last Name"
                            type="text"
                            name="lastName"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {/*  {formErrors.lastName.length > 0 && (
                            <span className="errorMessage">
                                {formErrors.lastName}
                            </span>
                        )} */}
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input
                            /*  className={
                                formErrors.email.length > 0 ? 'error' : null
                            } */
                            placeholder="Email"
                            type="email"
                            name="email"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {/*  {formErrors.email.length > 0 && (
                            <span className="errorMessage">
                                {formErrors.email}
                            </span>
                        )} */}
                    </div>
                    <div className="street">
                        <label htmlFor="street">street</label>
                        <input
                            /*  className={
                                formErrors.street.length > 0 ? 'error' : null
                            } */
                            placeholder="street"
                            type="text"
                            name="address.street"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {/* {formErrors.street.length > 0 && (
                            <span className="errorMessage">
                                {formErrors.street}
                            </span>
                        )} */}
                    </div>

                    <div className="houseNumber">
                        <label htmlFor="houseNumber">houseNumber</label>
                        <input
                            /* className={
                                formErrors.houseNumber.length > 0
                                    ? 'error'
                                    : null
                            } */
                            placeholder="houseNumber"
                            type="text"
                            name="address.houseNumber"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {/*  {formErrors.houseNumber.length > 0 && (
                            <span className="errorMessage">
                                {formErrors.houseNumber}
                            </span>
                        )} */}
                    </div>

                    <div className="postalCode">
                        <label htmlFor="postalCode">postalCode</label>
                        <input
                            /* className={
                                formErrors.postalCode.length > 0
                                    ? 'error'
                                    : null
                            } */
                            placeholder="postalCode"
                            type="text"
                            name="address.postalCode"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {/*  {formErrors.postalCode.length > 0 && (
                            <span className="errorMessage">
                                {formErrors.postalCode}
                            </span>
                        )} */}
                    </div>

                    <div className="location">
                        <label htmlFor="location">location</label>
                        <input
                            /* className={
                                formErrors.location.length > 0 ? 'error' : null
                            } */
                            placeholder="location"
                            type="text"
                            name="address.location"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {/* {formErrors.location.length > 0 && (
                            <span className="errorMessage">
                                {formErrors.location}
                            </span>
                        )} */}
                    </div>

                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input
                            /* className={
                                formErrors.password.length > 0 ? 'error' : null
                            } */
                            placeholder="Password"
                            type="password"
                            name="password"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {/* {formErrors.password.length > 0 && (
                            <span className="errorMessage">
                                {formErrors.password}
                            </span>
                        )} */}
                    </div>
                    <div className="createAccount">
                        <button onClick={this.handleSubmit}>
                            Create Account
                        </button>
                        <small>Already have an account?</small>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterParents;
