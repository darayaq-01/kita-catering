import React from 'react';

import About from './About';
import Testimonials from './Testimonials';

const Content = () => {
    return (
        <>
            <section class="container mx-auto px-6 p-10">
                <About />
                <Testimonials />
            </section>
        </>
    );
};

export default Content;
