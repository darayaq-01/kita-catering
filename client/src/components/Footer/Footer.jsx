import React from 'react';
import Column1 from './Column1';
import Column2 from './Column2';
import Column3 from './Column3';
import Column4 from './Column4';

function Footer() {
    return (
        <footer className="md:container md:mx-auto">
            <div class="container  mx-auto px-6 pt-10 pb-6 bg-gray-200">
                <div class="flex flex-wrap">
                    <Column1 />
                    <Column2 />
                    <Column3 />
                    <Column4 />
                </div>
            </div>

            <div className="flex justify-center items-center h-16 bg-black text-white">
                <p>Copyright 2021 XDEV All rigt</p>
            </div>
        </footer>
    );
}

export default Footer;
