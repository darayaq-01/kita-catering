import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

const Navbar = () => {
    return (
        <nav>
            <div class="container mx-auto px-6 py-2 flex justify-between items-center">
                {/* doesn't work this approach */}
                {/*  <Link to="/" className="pl-8">
                    <img
                        src={Logo}
                        alt="logo"
                        className="h-20 w-2 p-2 self-center"
                    />
                </Link> */}
                <div class="md:flex-shrink-0">
                    <a class="navbar-brand" href="/">
                        <div class="logo-image">
                            <img src={Logo} class="img-fluid" />
                        </div>
                    </a>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                        <svg
                            class="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div class="hidden lg:block">
                    <ul class="inline-flex">
                        <li>
                            <a class="px-4 font-bold" href="/">
                                Home
                            </a>
                        </li>
                        <li>
                            <a class="px-4 hover:text-gray-800" href="/about">
                                About
                            </a>
                        </li>
                        <li>
                            <a class="px-4 hover:text-gray-800" href="/contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
