/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';

import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import Testimonials from 'components/Testimonials/Testimonials';

import Footer from 'components/Footers/Footer.js';

import HeroImg from '../assets/img/hero.jpg';

export default function Index() {
    return (
        <>
            <IndexNavbar fixed />
            {/* is need to fix the navbar and change the behavior when is scroll down */}
            {/* <Navbar transparent /> */}
            <main>
                {/* hero section */}
                <section>
                    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75 bg-white">
                        <div
                            className="absolute top-0 w-full h-full bg-center bg-cover"
                            style={{
                                backgroundImage: `url(${HeroImg})`,
                            }}
                        >
                            <span
                                id="blackOverlay"
                                className="w-full h-full absolute opacity-75 bg-black"
                            ></span>
                        </div>

                        <div className="container relative mx-auto">
                            <div className="items-center flex flex-wrap">
                                <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                                    <div className="pt-32 sm:pt-0">
                                        <h2 className="text-white font-semibold text-5xl">
                                            Catering service
                                        </h2>
                                        <p className="mt-4 text-lg leading-relaxed text-gray-300">
                                            Your catering with caring
                                        </p>
                                        <div className="mt-12">
                                            <Link
                                                to="/auth/register"
                                                className={
                                                    'get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blue-500 active:bg-blue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
                                                }
                                            >
                                                Register
                                            </Link>
                                            <Link
                                                to="/auth/login"
                                                className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                                            >
                                                Login
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                            style={{ transform: 'translateZ(9)' }}
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
                                    className="text-white fill-current"
                                    points="2560 0 2560 100 0 100"
                                ></polygon>
                            </svg>
                        </div>
                    </div>
                </section>

                <section className="pb-20 relative block bg-white">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                                className="text-white fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>

                <section className="pt-10 pb-5">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center mb-4">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold">
                                    Cooking for{' '}
                                    <span className="text-red-500">KIDS!</span>
                                </h2>
                                <p className="text-lg leading-relaxed m-4 text-gray-900">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Quidem modi reprehenderit
                                    vitae exercitationem aliquid dolores ullam
                                    temporibus enim expedita aperiam mollitia
                                    iure consectetur dicta tenetur, porro
                                    consequuntur saepe accusantium consequatur.
                                </p>
                                <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                                    <Link to="/about"
                                        className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blue-500 active:bg-blue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                                    >
                                        More about us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                        <div className="flex flex-wrap mt-12 justify-center">
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-medal text-xl"></i>
                                </div>
                                <h6 className="text-xl mt-5 font-semibold">
                                    Excelent Services
                                </h6>
                                <p className="mt-2 m-4 text-lg leading-relaxedtext-gray-600">
                                    Best services for all the hungry people who need our services*
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-poll text-xl"></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold">
                                    Healthy first
                                </h5>
                                <p className="mt-2 m-4 text-lg leading-relaxedtext-gray-600">
                                    Our french potatos are cooking with bio-potatos and bio-oil
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-lightbulb text-xl"></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold">
                                    Launch time
                                </h5>
                                <p className="mt-2 m-4 text-lg leading-relaxedtext-gray-600">
                                    Best food with the best quality
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                        <div className="flex flex-wrap mt-12 justify-center">

                            <Testimonials />

                        </div>
                    </div>
                </section>

                <section className="pb-20 relative block bg-white">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                                className="text-white fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>
            </main>
            <Testimonials />
            <Footer />
        </>
    );
}
