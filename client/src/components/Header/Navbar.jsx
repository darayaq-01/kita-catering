import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <nav class="fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-transparent">
            <div class="container mx-auto px-6 py-2 flex justify-between items-center">
                <div class="md:flex-shrink-0">
                    <a class="navbar-brand" href="/">
                        <div class="logo-image">
                            <img src={Logo} alt="logo" class="img-fluid" />
                        </div>
                    </a>
                </div>
                <button
                    type="button"
                    className="block lg:hidden"
                    onClick={handleClick}
                >
                    <svg
                        className="h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        {isOpen && (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                            />
                        )}
                        {!isOpen && (
                            <path
                                fillRule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                            />
                        )}
                    </svg>
                </button>
                <ul class={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
                    <Link to="/" className="px4 menu-text hover:text-gray-800">
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="px4 menu-text hover:text-gray-800"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="px4 menu-text hover:text-gray-800"
                    >
                        Contact
                    </Link>

                    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                        <Link to="/signup">
                            <button className="inline-flex items-center py-1 px-3 focus:outline-none hover:bg-gray-200">
                                Login
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button className="inline-flex items-center py-1 px-3 focus:outline-none hover:bg-gray-200">
                                SignIn
                            </button>
                        </Link>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
