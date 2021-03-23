import React from 'react';

import HeroImg from '../../assets/img/hero.jpg';

import Timer from 'components/Clock/Clock';

export default function HeaderAdmin(props) {
    return (
        <>
            {/* Header */}
            <div className="relative bg-blue-600 md:pt-32 pb-32 pt-12 ">
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
                    <div className="relative flex flex-col min-w-0 break-words transparent w-full mb-6 shadow-lg rounded">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                {/* content */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
