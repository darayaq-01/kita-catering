import React from 'react';

import Navbar from 'components/Navbars/AuthNavbar.js';
import Footer from 'components/Footers/Footer.js';

import HeroImg from '../assets/img/hero.jpg';
import logo from '../assets/img/logo-catering-fix.svg';

export default function Contact() {
    return (
        <>
            <Navbar transparent />
            <main className="profile-page">
                <section className="relative block h-500-px">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${HeroImg})`,
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-50 bg-black"
                        ></span>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                        style={{ transform: 'translateZ(0)' }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>

                <section className="relative py-16 bg-gray-300">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <img
                                                alt="..."
                                                src={logo}
                                                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="my-20 py-20">
                                    <br />{' '}
                                </div>
                                <div className="text-center pt-20 mt-12">
                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                                        Let's talk!
                                    </h3>
                                </div>
                                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <ul className="flex flex-col lg:flex-row items-center">
                                                <li className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                                                    <svg
                                                        className="w-5 h-5"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>

                                                    <span className="mt-2">
                                                        Leipsch Str. 1, Leipzig
                                                    </span>
                                                </li>

                                                <li className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                                                    <svg
                                                        className="w-5 h-5"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                    </svg>

                                                    <span className="mt-2">
                                                        +49 157 610 811
                                                    </span>
                                                </li>

                                                <li className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                                                    <svg
                                                        className="w-5 h-5"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                    </svg>

                                                    <span className="mt-2">
                                                        catering@kita.de
                                                    </span>
                                                </li>
                                            </ul>

                                            <div>
                                                <div className="mt-6 ">
                                                    <div className="items-center -mx-2 md:flex">
                                                        <div className="w-full lg:w-6/12 mx-5 lg:pr-5">
                                                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                                                Name
                                                            </label>
                                                            <input
                                                                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                                                type="text"
                                                            />
                                                        </div>

                                                        <div className="w-full  lg:w-6/12 mx-5 lg:pl-5">
                                                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                                                E-mail
                                                            </label>
                                                            <input
                                                                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                                                type="email"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="w-full mt-4">
                                                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                                            Message
                                                        </label>

                                                        <textarea className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                                                    </div>

                                                    <div className="flex justify-center mt-6">
                                                        <button className="px-4 py-2 text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                                            Send Message
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
