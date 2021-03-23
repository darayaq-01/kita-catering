import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { format, addBusinessDays } from 'date-fns';
import { useForm } from 'react-hook-form';

const defaultValues = {
    orderItem: {
        name: '',
        qty: 1,
        price: 0,
    },
    taxPrice: 0,
    totalPrice: 0,
};

// main component

export default function CardOptions(props) {
    const dateFormat = 'EEEE';
    const [options, setOptions] = useState([]);
    const [options2, setOptions2] = useState([]);

    // get the date and pass to the childrens
    function _monday(i) {
        let date = new Date();
        let displayDate = format(addBusinessDays(date, i), 'MMMM, do');
        let weekDay = format(addBusinessDays(date, i), dateFormat, {
            weekStartsOn: 1,
        });
        let cardDate = addBusinessDays(date, i);
        return { displayDate, weekDay, cardDate };
    }

    // NOTE: why, another option??
    /* 
  useEffect(() => {
      axios({
          url: `/api/products/options?cardDate=${encodeURIComponent(
              _monday(props.day).cardDate
          )}`,
          method: 'get',
          headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
          },
      })
          .then((res) => {
              if (res.data.length >= 1) {
                  setOptions(res.data[0]);
              } else if (res.data.length >= 2) {
                  setOptions(res.data[1]);
              } else {
                  setOptions({});
              }
          })
          .catch((err) => console.log(err.message));
  }, []);
   */

    useEffect(() => {
        axios({
            url: `/api/products/options?cardDate=${encodeURIComponent(
                _monday(props.day).cardDate
            )}`,
            method: 'get',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((res) => {
                if (res.data.length >= 1) {
                    setOptions(res.data[0]);
                } else {
                    setOptions({});
                }
            })
            .catch((err) => console.log(err.message));
    }, []);

    useEffect(() => {
        axios({
            url: `/api/products/options?cardDate=${encodeURIComponent(
                _monday(props.day).cardDate
            )}`,
            method: 'get',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((res) => {
                if (res.data.length >= 2) {
                    setOptions2(res.data[1]);
                } else {
                    setOptions({});
                }
            })
            .catch((err) => console.log(err.message));
    }, []);

    // to send the option chossen
    const { register, errors, handleSubmit } = useForm({ defaultValues });
    const onSubmit = (order) => {
        axios({
            url: '/api/orders',
            method: 'GET',
            order: {
                ...order,
            },
        })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0 dark:bg-gray-800">
                {/* header */}

                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        {/* set date */}

                        <h6 className="text-gray-800 text-xl font-bold">
                            &nbsp;&nbsp;
                            {_monday(props.day).displayDate}.{' '}
                            {_monday(props.day).weekDay}
                        </h6>

                        {/* NOTE: applied condition  */}
                        {<condition></condition> ? (
                            <button
                                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={handleSubmit(onSubmit)}
                            >
                                save
                            </button>
                        ) : (
                            <button
                                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                            >
                                edit
                            </button>
                        )}
                    </div>
                </div>

                {/* options */}

                {/* options 1 */}

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
                            {options.name || 'Pizza?'}
                        </h3>
                        <ul>
                            <li className="mt-1 p-2 text-sm text-gray-900 dark:text-gray-400">
                                Description:{' '}
                                {options.description || 'Something tasty'}
                            </li>
                            <li className="mt-1 p-2 text-sm text-gray-900 dark:text-gray-400">
                                Ingredients:{' '}
                                {options.ingredients || 'Something healthy'}
                            </li>
                            <li className="mt-1 p-2 text-sm text-gray-900 dark:text-gray-400">
                                Category: {options.category || 'Meal'}
                            </li>
                            <li className="mt-1 p-2 text-sm text-gray-900 dark:text-gray-400">
                                Vegan: {options.isVegan || 'No'}
                            </li>
                            <li className="mt-1 p-2 text-sm text-gray-900 dark:text-gray-400">
                                Vegetarian: {options.isVegetarian || 'No'}
                            </li>
                            <li className="mt-1 p-2 text-sm text-gray-900 dark:text-gray-400">
                                Gluten Free: {options.isGlutenFree || 'No'}
                            </li>
                        </ul>

                        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <button
                                className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                                type="button"
                                ref={register}
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
                            {options2.name || 'Pizza?'}
                        </h3>
                        <ul>
                            <li className="mt-1 p-2 text-sm text-gray-900 dark:text-gray-400">
                                Description:{' '}
                                {options2.description || 'Something tasty'}
                            </li>
                            <li className="mt-1 p-2 text-sm text-gray-900 dark:text-gray-400">
                                Ingredients:{' '}
                                {options2.ingredients || 'Something healthy'}
                            </li>
                            <li className="mt-1 p-2 text-sm text-gray-900 dark:text-gray-400">
                                Category: {options2.category || 'Meal'}
                            </li>
                            <li className="mt-1 p-2 text-sm text-gray-900 dark:text-gray-400">
                                Vegan: {options2.isVegan || 'No'}
                            </li>
                            <li className="mt-1 p-2 text-sm text-gray-900 dark:text-gray-400">
                                Vegetarian: {options2.isVegetarian || 'No'}
                            </li>
                            <li className="mt-1 p-2 text-sm text-gray-900 dark:text-gray-400">
                                Gluten Free: {options2.isGlutenFree || 'No'}
                            </li>
                        </ul>

                        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <button
                                className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                                type="button"
                                ref={register}
                                onClick={() => console.log('option2')}
                            >
                                choose
                            </button>
                        </div>
                    </div>
                </div>

                {/* footer */}

                <div className="flex items-center justify-between rounded-b-lg px-4 py-2 bg-gray-900">
                    <button className="px-2 py-3 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                        Cancel the food
                    </button>
                </div>
            </div>
        </>
    );
}
