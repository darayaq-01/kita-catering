import React from 'react';

import Template from '../Dashboard/Template';

import Content from '../Main/Content';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            <Hero />
            <Content />
            <Template />
        </div>
    );
};

export default Home;
