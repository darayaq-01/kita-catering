import React from 'react';
import { Link } from 'react-router-dom';

// components

import IndexNavbar from 'components/Navbars/IndexNavbar';
import Footer from 'components/Footers/Footer';
import About from 'components/Home/About';
import Testimonials from 'components/Home/Testimonials';

import HeroImg from '../assets/img/hero.jpg';

const Home = () => {
    return (
        <>
            <IndexNavbar fixed />

            {/* hero */}
            <section className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                {/* background img */}
                <div
                    className="absolute top-0 w-full h-full bg-right bg-cover"
                    style={{
                        backgroundImage: `url(${HeroImg})`,
                        backgroundAttachment: 'fixed',
                        /*  backgroundPosition: 'center', */
                        backgroundRepeat: 'no - repeat',
                        /*   backgroundSize: 'cover', */
                    }}
                >
                    <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-75 bg-black"
                    ></span>
                </div>

                <div className="container relative">
                    <div className="items-left flex flex-col flex-wrap">
                        {/* buttons */}
                        <div className="w-full lg:w-4/12 px-4 lg:order-3">
                            <Link to="#/" className="py-6 px-3 mt-32 sm:mt-0">
                                <button
                                    className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-2xl px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    Register now
                                </button>
                            </Link>
                        </div>

                        <div className="w-full lg:w-4/12 px-4 lg:order-3">
                            <Link to="#/" className="py-6 px-3 mt-32 sm:mt-0">
                                <button
                                    className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-2xl px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    login
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* polygon */}
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
                            className="text-white fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </section>

            <main>
                {/* content */}
                <section className="pt-20 pb-30">
                    <div className="container mx-auto px-4">
                        <About />
                    </div>
                </section>

                <section className="pt-20 pb-30">
                    <div className="container mx-auto px-4">
                        <Testimonials />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};
export default Home;
