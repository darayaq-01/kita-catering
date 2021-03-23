import React from 'react';

// components

import Clock from 'components/Clock/Clock';

import HeroImg from '../../assets/img/hero.jpg';
/* import { userSelector } from 'features/User/UserSlice'; */

export default function HeaderUser() {
    /*   const { loggedUser } = userSelector(userSelector) */
    return (
        <>
            {/* Header */}
            <div className="relative bg-blue-600 md:pt-32 pb-32 pt-12">
                <div
                    className="absolute top-0 w-full h-full bg-rigth bg-cover"
                    style={{
                        backgroundImage: `url(${HeroImg})`,
                        backgroundAttachment: 'fixed',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-75 bg-black"
                    ></span>
                </div>
                <div className="w-full xl:w-4/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words transparent w-full mb-6 shadow-lg rounded"></div>
                </div>
            </div>
        </>
    );
}
