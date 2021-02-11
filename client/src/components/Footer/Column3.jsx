import React from 'react';

const Column3 = () => {
    return (
        <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">Social</h5>
            <ul class="mb-4">
                <li class="mt-2">
                    <a
                        href="/"
                        class="hover:underline text-gray-600 hover:text-orange-500"
                    >
                        Facebook
                    </a>
                </li>
                <li class="mt-2">
                    <a
                        href="/"
                        class="hover:underline text-gray-600 hover:text-orange-500"
                    >
                        Linkedin
                    </a>
                </li>
                <li class="mt-2">
                    <a
                        href="/"
                        class="hover:underline text-gray-600 hover:text-orange-500"
                    >
                        Twitter
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Column3;
