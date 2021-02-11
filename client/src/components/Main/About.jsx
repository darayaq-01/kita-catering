import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div class="flex flex-col  flex-wrap my-30">
            <div class="w-full md:w-1/2">
                <h4 class=" text-gray-800 font-bold mb-3">Who we are</h4>
                <p class="text-gray-600 mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem modi, temporibus dolorem, voluptatibus dignissimos
                    necessitatibus provident molestias at inventore veritatis,
                    debitis eaque saepe minus ab adipisci! Illum, tenetur?
                    Dignissimos, explicabo.
                </p>
            </div>
            <Link to="/about">
                <button class="testing">About us</button>
            </Link>
        </div>
    );
};

export default About;
