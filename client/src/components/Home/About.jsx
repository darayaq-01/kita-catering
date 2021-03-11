import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <article className="flex flex-col justify-between px-6 py-2 bg-white dark:bg-gray-800 space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                    Cooking for{' '}
                    <span className="text-indigo-600 dark:text-indigo-400">
                        KIDS!
                    </span>
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem modi reprehenderit vitae exercitationem aliquid
                    dolores ullam temporibus enim expedita aperiam mollitia iure
                    consectetur dicta tenetur, porro consequuntur saepe
                    accusantium consequatur.
                </p>

                <button className="mt-8">
                    <Link
                        to="/#"
                        className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-indigo-600 rounded hover:bg-indigo-800"
                    >
                        About us
                    </Link>
                </button>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
                <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <i className="fas fa-medal text-xl"></i>
                    </div>
                    <h6 className="text-xl mt-5 font-semibold text-white">
                        Excelent Services
                    </h6>
                    <p className="mt-2 mb-4 text-gray-500">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                </div>
                <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <i className="fas fa-poll text-xl"></i>
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-white">
                        Grow your market
                    </h5>
                    <p className="mt-2 mb-4 text-gray-500">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                </div>
                <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <i className="fas fa-lightbulb text-xl"></i>
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-white">
                        Launch time
                    </h5>
                    <p className="mt-2 mb-4 text-gray-500">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                </div>
            </div>
        </article>
    );
};

export default About;
