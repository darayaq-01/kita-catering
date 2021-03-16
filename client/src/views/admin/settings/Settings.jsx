import React from 'react';

// components

import CardSettings from './CardSettings';
import CardProfile from './CardProfile';

export default function Settings() {
    return (
        <>
            <div className="flex flex-wrap md:pt-32 pb-32 pt-12">
                <div className="w-full lg:w-8/12 px-4">
                    <CardSettings />
                </div>
                <div className="w-full lg:w-4/12 px-4">
                    <CardProfile />
                </div>
            </div>
        </>
    );
}
