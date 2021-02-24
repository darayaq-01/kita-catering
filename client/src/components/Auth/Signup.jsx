import React from 'react';
import { Link } from 'react-router-dom';
import RegisterFaciliy from './RegisterFacility';
import RegisterParents from './RegisterParents';

const Signup = () => {
    return (
        <article className="h-screen flex flex-col justify-center items-center py-5 bg-green-300">
            <h4 className="uppercase font-black">Register as</h4>
            <Link to="/register/facility">
                <button class="tex-3x1 bg-red-600 hover:bg-red-900 text-white font-bold m-3 py-2 px-4 rounded">
                    Kita
                </button>
            </Link>
            <Link to="/register/parents">
                <button class="text-3x1 bg-red-600 hover:bg-red-900 text-white font-bold m-3 py-2 px-4 rounded">
                    User
                </button>
            </Link>
        </article>
    );
};

export default Signup;
