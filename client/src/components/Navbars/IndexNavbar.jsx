/*eslint-disable*/
import React from 'react';
import { useHistory, NavLink, Link } from 'react-router-dom';

import { userLogout } from '_api/userApi';
import Logo from '../../assets/img/logo-catering-fix.svg';

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const history = useHistory();

    const logMeOut = () => {
        sessionStorage.removeItem('accessJWT');
        localStorage.removeItem('kitaCateringSite');
        userLogout();
        history.push('/');
    };

    return (
        <>
            <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        {/* Logo */}
                        <Link to={'/'} className="block text-left">
                            <img
                                src={Logo}
                                alt="logo"
                                className="h-10 sm:h-10"
                            />
                        </Link>

                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
                            (navbarOpen ? ' block' : ' hidden')
                        }
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto p-10">
                            <li className="flex flex-col md:flex-row items-center">
                                <Link
                                    to="/home"
                                    className="px-2 py-1 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded 2xl:text-gray-900 hover:bg-gray-900 hover:text-gray-100 md:mx-2;"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/about"
                                    className="px-2 py-1 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded 2xl:text-gray-900 hover:bg-gray-900 hover:text-gray-100 md:mx-2;"
                                >
                                    About
                                </Link>
                                <Link
                                    to="/contact"
                                    className="px-2 py-1 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded 2xl:text-gray-900 hover:bg-gray-900 hover:text-gray-100 md:mx-2;"
                                >
                                    Contact
                                </Link>
                                <Link
                                    to="/user/dashboard"
                                    className="px-2 py-1 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded 2xl:text-gray-900 hover:bg-gray-900 hover:text-gray-100 md:mx-2;"
                                >
                                    user dashboard{' '}
                                </Link>
                                <Link
                                    to="/client/dashboard"
                                    className="px-2 py-1 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded 2xl:text-gray-900 hover:bg-gray-900 hover:text-gray-100 md:mx-2;"
                                >
                                    client dashboard{' '}
                                </Link>
                                <Link
                                    to="/admin/dashboard"
                                    className="px-2 py-1 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded 2xl:text-gray-900 hover:bg-gray-900 hover:text-gray-100 md:mx-2;"
                                >
                                    admin dashboard{' '}
                                </Link>
                            </li>
                            <ul className="flex flex-row items-center mt-5">
                                {/*  // should be register or none (when user is already login) */}
                                {!sessionStorage.getItem('accessJWT') ? (
                                    <Link
                                        to="/auth/register"
                                        className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        Register
                                    </Link>
                                ) : null}

                                {/* // should be login or logout if user is already
                            signin */}
                                {!sessionStorage.getItem('accessJWT') ? (
                                    <Link
                                        to="/auth/login"
                                        className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        LogIn
                                    </Link>
                                ) : (
                                    <Link
                                        onClick={logMeOut}
                                        className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        Logout
                                    </Link>
                                )}
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
