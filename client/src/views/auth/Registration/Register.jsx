import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { newUserRegistration } from './userRegAction';

const initialState = {
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
};
const passVerificationError = {
    isLenthy: false,
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSpclChr: false,
    /* confirmPass: false, */
};

const Register = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [newUser, setNewUser] = useState(initialState);
    const [passwordError, setPasswordError] = useState(passVerificationError);

    const { isLoading, status, message } = useSelector(
        (state) => state.registration
    );

    useEffect(() => {}, [newUser]);

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        /* to select nested fields too */

        if (name.includes('address')) {
            setNewUser({
                ...newUser,
                address: { ...newUser.address, [name.split('.')[1]]: value },
            });
        } else {
            setNewUser({
                ...newUser,
                [name]: value,
            });
        }

        if (name === 'password') {
            const isLenthy = value.length > 8;
            const hasUpper = /[A-Z]/.test(value);
            const hasLower = /[a-z]/.test(value);
            const hasNumber = /[0-9]/.test(value);
            const hasSpclChr = /[@,#,$,%,&]/.test(value);

            setPasswordError({
                ...passwordError,
                isLenthy,
                hasUpper,
                hasLower,
                hasNumber,
                hasSpclChr,
            });
        }

        /* to implement: confirm pass */
        /* 
        if (name === "confirmPass") {
        setPasswordError(
            {
            ...passwordError,
            confirmPass: newUser.password === value,
            }
        )} 
        */
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('all the info:', newUser);

        const {
            firstName,
            lastName,
            email,
            address: { street, houseNumber, postalCode, location },
            password,
        } = newUser;

        const newRegistration = {
            firstName,
            lastName,
            email,
            address: {
                street,
                houseNumber,
                postalCode,
                location,
            },
            password,
        };
        dispatch(newUserRegistration(newRegistration));
        history.push('/auth/login');
    };

    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 className="text-gray-600 text-sm font-bold">
                                        Sign up with
                                    </h6>
                                </div>
                                <div className="btn-wrapper text-center">
                                    <button
                                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        <img
                                            alt="..."
                                            className="w-5 mr-1"
                                            src={require('assets/img/github.svg')}
                                        />
                                        Github
                                    </button>
                                    <button
                                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        <img
                                            alt="..."
                                            className="w-5 mr-1"
                                            src={require('assets/img/google.svg')}
                                        />
                                        Google
                                    </button>
                                </div>
                                <hr className="mt-6 border-b-1 border-gray-400" />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                {message && (
                                    <div
                                        variant={
                                            status === 'success'
                                                ? 'success'
                                                : 'danger'
                                        }
                                    >
                                        {message}
                                    </div>
                                )}
                                <div className="text-gray-500 text-center mb-3 font-bold">
                                    <small>Or sign up with credentials</small>
                                </div>

                                {message && (
                                    <p
                                        variant={
                                            status === 'success'
                                                ? 'success'
                                                : 'danger'
                                        }
                                    >
                                        {message}
                                    </p>
                                )}
                                {/* form */}
                                <form onSubmit={handleOnSubmit}>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={newUser.firstName}
                                            onChange={handleOnChange}
                                            placeholder="First name"
                                            required
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={newUser.lastName}
                                            onChange={handleOnChange}
                                            placeholder="Last name"
                                            required
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={newUser.email}
                                            onChange={handleOnChange}
                                            placeholder="Enter email"
                                            required
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Street
                                        </label>
                                        <input
                                            type="text"
                                            name="address.street"
                                            value={newUser.address.street}
                                            onChange={handleOnChange}
                                            placeholder="Street"
                                            required
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            house number
                                        </label>
                                        <input
                                            type="text"
                                            name="address.houseNumber"
                                            value={newUser.address.houseNumber}
                                            onChange={handleOnChange}
                                            placeholder="house number"
                                            required
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Postal Code
                                        </label>
                                        <input
                                            type="text"
                                            name="address.postalCode"
                                            value={newUser.address.postalCode}
                                            onChange={handleOnChange}
                                            placeholder="Postal Code"
                                            required
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            name="address.location"
                                            value={newUser.address.location}
                                            onChange={handleOnChange}
                                            placeholder="Last name"
                                            required
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={newUser.password}
                                            onChange={handleOnChange}
                                            placeholder="Password"
                                            required
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                        />
                                    </div>

                                    <div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                id="customCheckLogin"
                                                type="checkbox"
                                                className="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                            />
                                            <span className="ml-2 text-sm font-semibold text-gray-700">
                                                I agree with the{' '}
                                                <a
                                                    href="/#"
                                                    className="text-blue-500"
                                                    onClick={(e) =>
                                                        e.preventDefault()
                                                    }
                                                >
                                                    Privacy Policy
                                                </a>
                                            </span>
                                        </label>
                                    </div>

                                    {/* <div>
                                        {!passwordError.confirmPass && (
                                            <div className="text-danger mb-3">
                                                Password doesn't match!
                                            </div>
                                        )}
                                    </div> */}

                                    <ul className="mb-4">
                                        <li
                                            className={
                                                passwordError.isLenthy
                                                    ? 'text-success'
                                                    : 'text-danger'
                                            }
                                        >
                                            Min 8 characters
                                        </li>
                                        <li
                                            className={
                                                passwordError.hasUpper
                                                    ? 'text-success'
                                                    : 'text-danger'
                                            }
                                        >
                                            At least one upper case
                                        </li>
                                        <li
                                            className={
                                                passwordError.hasLower
                                                    ? 'text-success'
                                                    : 'text-danger'
                                            }
                                        >
                                            At least one lower case
                                        </li>
                                        <li
                                            className={
                                                passwordError.hasNumber
                                                    ? 'text-success'
                                                    : 'text-danger'
                                            }
                                        >
                                            At least one number
                                        </li>
                                        <li
                                            className={
                                                passwordError.hasSpclChr
                                                    ? 'text-success'
                                                    : 'text-danger'
                                            }
                                        >
                                            At least on of the special
                                            characters i.e @ # $ % &{' '}
                                        </li>
                                    </ul>
                                    <div className="text-center mt-6">
                                        <button
                                            variant="primary"
                                            type="submit"
                                            disabled={Object.values(
                                                passwordError
                                            ).includes(false)}
                                            className="bg-gray-900 text-white
                                            active:bg-gray-700 text-sm font-bold
                                            uppercase px-6 py-3 rounded shadow
                                            hover:shadow-lg outline-none
                                            focus:outline-none mr-1 mb-1 w-full
                                            ease-linear transition-all
                                            duration-150"
                                        >
                                            {' '}
                                            Create Account
                                        </button>
                                        {isLoading ? (
                                            <svg
                                                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    class="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    stroke-width="4"
                                                ></circle>
                                                <path
                                                    class="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                        ) : null}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
