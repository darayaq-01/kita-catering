import React from 'react';

import CardCalendar from 'features/calendar/featClient/CardCalendar';
import CardSideCal from 'components/Cards/CardSideCal';

import BackgroundImg from '../../../assets/img/hero.jpg';

export default function UserDashboard() {
    return (
        <>
            <div
                className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0 md:pt-32 pb-32 pt-12 px-10"
                style={{
                    backgroundImage: `url(${BackgroundImg})`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'absolute',
                    backgroundRepeat: 'no - repeat',
                    backgroundSize: 'cover',
                    opacity: '95%',
                    backgroundColor: 'black',
                }}
            >
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-gray-800 text-xl font-bold">
                            USER!
                        </h6>
                    </div>
                </div>

                <div className="flex flex-wrap md:pt-10 pb-2 pt-20">
                    <div className="w-full lg:w-8/12 px-4">
                        <div className="w-full mb-12 px-4 h-48 content-evenly">
                            <CardCalendar day={0} />
                            <br />
                            <CardCalendar day={1} />
                            <br />

                            <CardCalendar day={2} />
                            <br />

                            <CardCalendar day={3} />
                            <br />

                            <CardCalendar day={4} />
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="w-full mb-12 px-4">
                            <CardSideCal />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
