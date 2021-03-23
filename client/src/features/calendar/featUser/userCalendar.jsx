import React, { useState } from 'react';
import format from 'date-fns/format';

// new -testings

import addBusinessDays from 'date-fns/addBusinessDays';

// option card
export function CardCalendarInner() {
    return (
        <div className="flex flex-col items-center justify-center max-w-sm mx-auto border-8 border-red-800">
            <div
                className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)',
                }}
            ></div>

            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                    Option N1
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    tasty lunch...
                </p>

                <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                        choose
                    </button>
                </div>
            </div>
        </div>
    );
}

// weekly card
const CardCalendar = (props) => {
    const dateFormat = 'EEEE';
    function _monday(i) {
        let date = new Date();
        let displayDate = format(addBusinessDays(date, i), 'dd MMMM');
        let weekDay = format(addBusinessDays(date, i), dateFormat, {
            weekStartsOn: 1,
        });
        return { displayDate, weekDay };
    }

    return (
        <>
            <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="px-4 py-2">
                    <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
                        &nbsp;&nbsp;
                        {_monday(props.day).weekDay}
                        {_monday(props.day).displayDate}
                    </h1>
                </div>

                <div className="flex lg:flex-col">
                    <CardCalendarInner />
                    <CardCalendarInner />
                </div>

                <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <h1 className="text-lg font-bold text-white">edit</h1>
                    <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                        Cancel the food
                    </button>
                </div>
            </div>
        </>
    );
};

export default CardCalendar;
