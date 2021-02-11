import React from 'react';

const Column2 = () => {
    return (
        <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">Legal</h5>
            <ul class="mb-4">
                <li class="mt-2">
                    <a
                        href="/"
                        class="hover:underline text-gray-600 hover:text-orange-500"
                    >
                        Terms
                    </a>
                </li>
                <li class="mt-2">
                    <a
                        href="/"
                        class="hover:underline text-gray-600 hover:text-orange-500"
                    >
                        Privacy
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Column2;
