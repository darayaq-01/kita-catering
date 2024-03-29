/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';

import UserDropdown from 'components/Dropdowns/UserDropdown.js';

import Logo from '../../assets/img/logo-catering-fix.svg';

export default function SidebarUser() {
    const [collapseShow, setCollapseShow] = React.useState('hidden');
    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() =>
                            setCollapseShow('bg-white m-2 py-3 px-6')
                        }
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    {/* Brand */}
                    <Link
                        className="md:block md:pb-2 mr-0 inline-block p-4 px-0"
                        to="/"
                    >
                        <img src={Logo} alt="logo" className="h-10 sm:h-10" />
                    </Link>
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            <UserDropdown />
                        </li>
                    </ul>
                    {/* Collapse */}
                    <div
                        className={
                            'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <img
                                        src={Logo}
                                        alt="logo"
                                        className="h-10 sm:h-10"
                                    />
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() =>
                                            setCollapseShow('hidden')
                                        }
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Form */}
                        {/* <form className="mt-6 mb-4 md:hidden">
                            <div className="mb-3 pt-0">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="px-3 py-2 h-12 border border-solid  border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                                />
                            </div>
                        </form> */}

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* Heading */}
                        <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            User Dashboard
                        </h6>
                        {/* Navigation */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li className="items-center">
                                <Link
                                    className={
                                        'text-xs uppercase py-3 font-bold block ' +
                                        (window.location.href.indexOf(
                                            '/user/dashboard'
                                        ) !== -1
                                            ? 'text-blue-500 hover:text-blue-600'
                                            : 'text-gray-800 hover:text-gray-600')
                                    }
                                    to="/user/dashboard"
                                >
                                    <i
                                        className={
                                            'fas fa-tv mr-2 text-sm ' +
                                            (window.location.href.indexOf(
                                                '/user/dashboard'
                                            ) !== -1
                                                ? 'opacity-75'
                                                : 'text-gray-400')
                                        }
                                    ></i>{' '}
                                    Dashboard
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className={
                                        'text-xs uppercase py-3 font-bold block ' +
                                        (window.location.href.indexOf(
                                            '/user/settings'
                                        ) !== -1
                                            ? 'text-blue-500 hover:text-blue-600'
                                            : 'text-gray-800 hover:text-gray-600')
                                    }
                                    to="/user/settings"
                                >
                                    <i
                                        className={
                                            'fas fa-tools mr-2 text-sm ' +
                                            (window.location.href.indexOf(
                                                '/user/settings'
                                            ) !== -1
                                                ? 'opacity-75'
                                                : 'text-gray-400')
                                        }
                                    ></i>{' '}
                                    Settings
                                </Link>
                            </li>
                        </ul>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* Heading */}
                        <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            Documentation
                        </h6>
                        {/* Navigation */}
                        <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                            <li className="inline-flex">
                                <a
                                    href="/#"
                                    target="_blank"
                                    className="text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
                                >
                                    <i className="fas fa-paint-brush mr-2 text-gray-400 text-base"></i>
                                    How to use
                                </a>
                            </li>

                            <li className="inline-flex">
                                <a
                                    href="/#"
                                    target="_blank"
                                    className="text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
                                >
                                    <i className="fab fa-css3-alt mr-2 text-gray-400 text-base"></i>
                                    Nutrition tips
                                </a>
                            </li>
                        </ul>
                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        <button
                            className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => {
                                console.log('click');
                            }}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
