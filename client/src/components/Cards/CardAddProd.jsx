import React from 'react';

import { format, addBusinessDays } from 'date-fns';

/* TODO
 * fix the i - delete =1
 * fix inner card, border would be good
 * margins
 */

/* innner component */
export function InnerCard() {
    return (
        <>
            {/* option 1 */}

            <div className="flex flex-col items-center justify-center max-w-sm mx-auto border-8 border-red-800">
                <div
                    className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80")',
                        height: '24vh',
                        maxWidth: '50vw',
                    }}
                ></div>

                <div className="w-56 -mt-20 mb-20 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 className="p-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                        Option N1
                    </h3>
                    <p className="mt-1 p-2 text-sm text-gray-600 dark:text-gray-400">
                        tasty lunch...
                    </p>

                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <button
                            className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                            type="button"
                            onClick={() => console.log('option1')}
                        >
                            choose
                        </button>
                    </div>
                </div>
            </div>

            {/* option 2  */}

            <div className="flex flex-col items-center justify-center max-w-sm mx-auto border-8 border-red-800">
                <div
                    className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")',
                        height: '24vh',
                        maxWidth: '50vw',
                    }}
                ></div>

                <div className="w-56 -mt-20 mb-20 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 className="p-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                        Option N1
                    </h3>
                    <p className="mt-1 p-2 text-sm text-gray-600 dark:text-gray-400">
                        tasty lunch...
                    </p>

                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <button
                            className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                            type="button"
                            onClick={() => console.log('option2')}
                        >
                            choose
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

// weekly calendar

export default function CardOptions(props) {
    const dateFormat = 'EEEE';

    function _monday(i = 1) {
        let date = new Date();
        let displayDate = format(addBusinessDays(date, i), 'dd MMMM');
        let weekDay = format(addBusinessDays(date, i), dateFormat, {
            weekStartsOn: 1,
        });
        return { displayDate, weekDay };
    }

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0 dark:bg-gray-800">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-gray-800 text-xl font-bold">
                            &nbsp;&nbsp;
                            {_monday(props.day).weekDay}
                            {_monday(props.day).displayDate}
                        </h6>
                        <button
                            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="button"
                        >
                            save/edit
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap py-10">
                    <div className="w-full xl:w-6/12 my-20 xl:my-10 px-4">
                        <InnerCard />
                    </div>
                </div>

                <div className="flex items-center justify-between rounded-b-lg px-4 py-2 bg-gray-900">
                    <h1 className="text-lg font-bold text-white">
                        {_monday(props.day).weekDay}
                        {_monday(props.day).displayDate}
                    </h1>
                    <button className="px-2 py-3 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                        Cancel the food
                    </button>
                </div>
            </div>
        </>
    );
}
