import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <article className="flex flex-col justify-between px-6 py-2 bg-white dark:bg-gray-800 ">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                Cooking for{' '}
                <span className="text-indigo-600 dark:text-indigo-400">
                    KIDS!
                </span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
                modi reprehenderit vitae exercitationem aliquid dolores ullam
                temporibus enim expedita aperiam mollitia iure consectetur dicta
                tenetur, porro consequuntur saepe accusantium consequatur.
            </p>

            <div className="mt-8">
                <Link
                    to="/"
                    className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-indigo-600 rounded hover:bg-indigo-800"
                >
                    About us
                </Link>
            </div>
        </article>
    );
};

export default About;
