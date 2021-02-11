import React from 'react';

/* should be a corrousel */

const Testimonials = () => {
    return (
        <section class="bg-gray-100 my-10">
            <div class="container mx-auto px-6 py-20">
                <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
                    Our clients
                </h2>
                <div class="flex flex-wrap">
                    <div class="w-full md:w-1/3 px-2 mb-4">
                        <div class="bg-white rounded shadow py-2">
                            <p class="text-gray-800 text-base px-6 mb-5">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Earum, officia!
                            </p>
                            <p class="text-gray-500 text-xs md:text-sm px-6">
                                Juana Perez, CEO GoogleKidzKita
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
