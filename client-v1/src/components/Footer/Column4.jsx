import React from 'react';

const Column4 = () => {
    return (
        <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">Company</h5>
            <ul class="mb-4">
                <li class="mt-2">
                    <a
                        href="/"
                        class="hover:underline text-gray-600 hover:text-orange-500"
                    >
                        Official Blog
                    </a>
                </li>
                <li class="mt-2">
                    <a
                        href="/"
                        class="hover:underline text-gray-600 hover:text-orange-500"
                    >
                        About Us
                    </a>
                </li>
                <li class="mt-2">
                    <a
                        href="/"
                        class="hover:underline text-gray-600 hover:text-orange-500"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Column4;
