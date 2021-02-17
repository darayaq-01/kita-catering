import React from 'react';

import About from './About';
import Testimonials from './Testimonials';

const Content = () => {
    return (
        <>
            <section class="container mx-auto my-15 p-10">
                <About />
            </section>
            <section class="container mx-auto mb-20 p-10">
                <Testimonials />
            </section>
        </>
    );
};

export default Content;
