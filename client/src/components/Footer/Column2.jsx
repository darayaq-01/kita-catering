import React from 'react';
import { Link } from 'react-router-dom';

const Column2 = () => {
    return (
        <div>
            <h3 className="text-gray-700 uppercase dark:text-white">
                Nutrition
            </h3>
            <Link
                to="/"
                className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
            >
                Our food
            </Link>
            <Link
                to="/"
                className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
            >
                Where comes our food
            </Link>
            <Link
                to="/"
                className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
            >
                How we prepared
            </Link>
        </div>
    );
};

export default Column2;
