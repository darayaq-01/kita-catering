import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import { logout } from '../../redux/actions/auth';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [showFacilitiesBoard, setShowFacilitiesBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);

    const logOut = () => {
        dispatch(logout());
    };
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentUser) {
            setShowFacilitiesBoard(
                currentUser.roles.includes('ROLE_FACILITIES')
            );
            setShowAdminBoard(currentUser.roles.includes('ROLE_ADMIN'));
        }
    }, [currentUser]);
    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div class="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to={'/'} className="block text-left">
                        <img src={Logo} alt="logo" class="h-10 sm:h-10" />
                    </Link>
                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            aria-label="toggle menu"
                            onClick={handleClick}
                        >
                            <svg
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                className="w-6 h-6"
                            >
                                {isOpen && (
                                    <path
                                        x-show="open"
                                        fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                )}
                                {!isOpen && (
                                    <path
                                        x-show="!open"
                                        fill-rule="evenodd"
                                        className=""
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                        clip-rule="evenodd"
                                    ></path>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                {/* mobile menu open: block // menu closed: hidden */}

                <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="w-full md:flex md:items-center md:justify-between">
                        <div className="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
                            <Link to={'/home'} className="menu-mobile">
                                Home
                            </Link>
                            <Link to="/about" className="menu-mobile">
                                About
                            </Link>
                            <Link to="/contact" className="menu-mobile">
                                Contact
                            </Link>
                            {showFacilitiesBoard && (
                                <Link
                                    to={'/facilities'}
                                    className="menu-mobile"
                                >
                                    facilities board
                                </Link>
                            )}
                            {showAdminBoard && (
                                <Link to={'/admin'} className="menu-mobile">
                                    admin board
                                </Link>
                            )}
                            {currentUser && (
                                <Link to={'/user'} className="menu-mobile">
                                    user dashboard
                                </Link>
                            )}
                        </div>
                        <div className="flex">
                            {currentUser ? (
                                <div>
                                    <Link to={'/profile'}>
                                        {currentUser.username}
                                    </Link>
                                    <button
                                        className="bg-white hover:bg-text-gray-800 text-gray-900 ml-4 py-2 px-3"
                                        onClick={logout}
                                    >
                                        Log In
                                    </button>
                                </div>
                            ) : (
                                    <div>
                                        <Link to={'/login'}>Login</Link>
                                        <Link to={'/signup'}>
                                            <button className="bg-black hover:bg-text-gray-800 text-white ml-4 py-2 px-3">
                                                Sign Up
                                        </button>
                                        </Link>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
