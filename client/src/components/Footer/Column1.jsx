import React from 'react';
import { Link } from 'react-router-dom';
const Column1 = () => {
    return (
        <div>
            <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
            <Link
                to="/"
                className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
            >
                Company
            </Link>
            <Link
                to="/"
                className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
            >
                Community
            </Link>
            <Link
                to="/"
                className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
            >
                Jobs
            </Link>
        </div>
    );
};

export default Column1;
