import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div class="hero-img h-screen bg-center bg-cover h-128">
            <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                <div className="container mx-auto px-6 flex flex-col ">
                    <Link to="/register">
                        <button class="btn-primary bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            Register Now
                        </button>
                    </Link>
                    <Link to="/login">
                        <button class="btn-secondary bg-white rounded hover:bg-blue-100 focus:outline-none focus:bg-white-500">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
