import React from 'react';

import About from './About';
import Testimonials from './Testimonials';

const Content = () => {
    return (
        <>
            <section class="container mx-auto p-10">
                <div className="my-5">
                    <About />
                </div>
            </section>
            <section class="container mx-auto p-10 mb-20">
                <div className="container my-15">
                    <h1 className="text-3xl font-bold text-gray-800 my-5 flex">
                        Our Clients
                    </h1>
                    <Testimonials />
                </div>
            </section>
        </>
    );
};

export default Content;
