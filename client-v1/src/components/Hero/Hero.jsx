import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero-img py-20 bg-white h-screen flex flex-col justify-center items-center">
            <div className="container mx-auto px-6 flex flex-col ">
                <Link className="flex-initial flex-col p-2" to="/register">
                    <button class="bg-blue-500 text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                        Register Now
                    </button>
                </Link>
                <Link className="flex-initial flex-col p-2" to="/login">
                    <button class="bg-white text-blue-500 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                        Login
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
