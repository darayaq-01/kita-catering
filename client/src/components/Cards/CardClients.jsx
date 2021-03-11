import React from 'react';

import card_1 from '../../assets/img/card1.png';
import card_2 from '../../assets/img/card2.png';
import card_3 from '../../assets/img/card3.png';

const Card_1 = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-full max-h-full m-4 p-4 bg-white shadow-lg dark:bg-gray-800">
            {/* img or logo */}
            <div className="w-full md:w-1/3 py-2 md:py-2">
                <div className="flex justify-center">
                    <img
                        className="object-cover w-40 h-40 border-2 border-indigo-500 rounded-full dark:border-indigo-400"
                        alt="Testimonial avatar"
                        src={card_1}
                    />
                </div>
            </div>
            {/* testimonial */}
            <div className="w-full md:w-2/3 py-2 md:py-5">
                <div className="flex flex-col items-center">
                    <p className="mt-2 text-gray-600 dark:text-gray-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae dolores deserunt ea doloremque natus error, rerum
                        quas odio quaerat nam ex commodi hic, suscipit in a
                        veritatis pariatur minus consequuntur!
                    </p>

                    <div className="flex mt-4">
                        <a
                            href="/#"
                            className="text-xl font-medium text-indigo-500 dark:text-indigo-300"
                        >
                            John Doe, CEO SesameStreet.Inc
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Card_2 = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-full max-h-full m-4 p-4 bg-white shadow-lg dark:bg-gray-800">
            {/* img or logo */}
            <div className="w-full md:w-1/3 py-2 md:py-2">
                <div className="flex justify-center">
                    <img
                        className="object-cover w-40 h-40 border-2 border-indigo-500 rounded-full dark:border-indigo-400"
                        alt="Testimonial avatar"
                        src={card_2}
                    />
                </div>
            </div>
            {/* testimonial */}
            <div className="w-full md:w-2/3 py-2 md:py-5">
                <div className="flex flex-col items-center">
                    <p className="mt-2 text-gray-600 dark:text-gray-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae dolores deserunt ea doloremque natus error, rerum
                        quas odio quaerat nam ex commodi hic, suscipit in a
                        veritatis pariatur minus consequuntur!
                    </p>

                    <div className="flex mt-4">
                        <a
                            href="/#"
                            className="text-xl font-medium text-indigo-500 dark:text-indigo-300"
                        >
                            Geordie Die, CEO ClaySchool.Inc
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Card_3 = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-full max-h-full m-4 p-4 bg-white shadow-lg dark:bg-gray-800">
            {/* img or logo */}
            <div className="w-full md:w-1/3 py-2 md:py-2">
                <div className="flex justify-center">
                    <img
                        className="object-cover w-40 h-40 border-2 border-indigo-500 rounded-full dark:border-indigo-400"
                        alt="Testimonial avatar"
                        src={card_3}
                    />
                </div>
            </div>
            {/* testimonial */}
            <div className="w-full md:w-2/3 py-2 md:py-5">
                <div className="flex flex-col items-center">
                    <p className="mt-2 text-gray-600 dark:text-gray-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae dolores deserunt ea doloremque natus error, rerum
                        quas odio quaerat nam ex commodi hic, suscipit in a
                        veritatis pariatur minus consequuntur!
                    </p>

                    <div className="flex mt-4">
                        <a
                            href="/#"
                            className="text-xl font-medium text-indigo-500 dark:text-indigo-300"
                        >
                            Johny Rotten, CEO NoFuture.Inc
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Card_1, Card_2, Card_3 };
