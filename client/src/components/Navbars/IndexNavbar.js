/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, NavLink } from 'react-router-dom';

import Logo from '../../assets/img/logo-catering-fix.svg';

export default function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const onLogOut = () => {
        console.log('onlogout');
        if (localStorage.getItem('token')) {
            localStorage.clear();
            window.location.href = '/auth/login';
        }
    };

    return (
        <>
            <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        {/* logo */}

                        <Link to={'/'}>
                            <img
                                src={Logo}
                                alt="logo"
                                className="h-10 lg:h-30"
                            />
                        </Link>

                        {/* hamburger menu */}
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
                        id="example-navbar-warning"
                    >
                        {/* menu */}

                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="flex flex-col md:flex-row items-center">
                                <Link
                                    to="/home"
                                    className={
                                        'px-2 py-1 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded 2xl:text-gray-900 hover:bg-gray-900 hover:text-gray-100 md:mx-2;' +
                                        (window.location.href.indexOf(
                                            '/admin/dashboard'
                                        ) !== -1
                                            ? 'text-blue-500 hover:text-blue-600'
                                            : 'text-gray-300 hover:text-gray-300')
                                    }
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="flex flex-col md:flex-row items-center">
                                <Link
                                    to="/about"
                                    className={
                                        'px-2 py-1 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded 2xl:text-gray-900 hover:bg-gray-900 hover:text-gray-100 md:mx-2;' +
                                        (window.location.href.indexOf(
                                            '/admin/dashboard'
                                        ) !== -1
                                            ? 'text-blue-500 hover:text-blue-600'
                                            : 'text-gray-300 hover:text-gray-300')
                                    }
                                >
                                    About
                                </Link>
                            </li>
                            <li className="flex flex-col md:flex-row items-center">
                                <Link
                                    to="/contact"
                                    className={
                                        'px-2 py-1 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded 2xl:text-gray-900 hover:bg-gray-900 hover:text-gray-100 md:mx-2;' +
                                        (window.location.href.indexOf(
                                            '/admin/dashboard'
                                        ) !== -1
                                            ? 'text-blue-500 hover:text-blue-600'
                                            : 'text-gray-300 hover:text-gray-300')
                                    }
                                >
                                    Contact
                                </Link>
                            </li>

                            {/* only for testing */}

                            {/*   <li className="flex flex-col md:flex-row items-center">
                                <Link
                                    to="/admin/dashboard"
                                    className="px-2 py-1 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded 2xl:text-gray-900 hover:bg-gray-900 hover:text-gray-100 md:mx-2;"
                                >
                                    d-ADMIN
                                </Link>
                            </li>
                             <li className="flex flex-col md:flex-row items-center">
                                <Link
                                    to="/contact"
                                    className="px-2 py-1 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded 2xl:text-gray-900 hover:bg-gray-900 hover:text-gray-100 md:mx-2;"
                                >
                                    dashoboard CLIENT
                                </Link>
                            </li> 
                            <li className="flex flex-col md:flex-row items-center">
                                <Link
                                    to="/user/dashboard"
                                    className="px-2 py-1 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded 2xl:text-gray-900 hover:bg-gray-900 hover:text-gray-100 md:mx-2;"
                                >
                                    d-USER
                                </Link>
                            </li>*/}

                            {/* Auth buttons */}
                            {!localStorage.getItem('token') ? (
                                <li className="flex items-center">
                                    <Link to="/auth/register">
                                        <button
                                            className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                            type="button"
                                            /* onClick={logMeOut} */
                                            onClick={() => {
                                                console.log('go to register');
                                            }}
                                        >
                                            Register
                                        </button>
                                    </Link>
                                </li>
                            ) : null}

                            {!localStorage.getItem('token') ? (
                                <li className="flex items-center">
                                    <Link to="/auth/login">
                                        <button
                                            className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            Login
                                        </button>
                                    </Link>
                                </li>
                            ) : (
                                <li className="flex items-center">
                                    <button
                                        className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={onLogOut}
                                    >
                                        Logout
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
