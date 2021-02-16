import React from 'react';
import { Link } from 'react-router-dom';

const Column3 = () => {
    return (
        <div>
            <h3 className="text-gray-700 uppercase dark:text-white">
                Products
            </h3>
            <Link
                to="/"
                className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
            >
                Meals for Kindergarden
            </Link>
            <Link
                to="/"
                className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
            >
                Meals for Schools
            </Link>
            <Link
                to="/"
                className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
            >
                Catering for events
            </Link>
        </div>
    );
};

export default Column3;
