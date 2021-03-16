import React, { useState, useEffect } from 'react';

export default function ModalInput(props) {
    // const [showModal, setShowModal] = useState(false);

    /* useEffect(() => {
        setShowModal(props.isDisplayed);
    }, [props.isDisplayed]); */

    const handleClickBtn = () => {
        // setShowModal(!showModal);
    };
    return (
        <>
            {/* {props.isDisplayed && ( */}
            <div
                /*  ref={props.ref_function} */
                id="modal-cont"
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                /* onClick={() => setShowModal(false)} */
            >
                <div className="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
                    <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

                    <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                        <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
                            <svg
                                className="fill-current text-white p-5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 18 18"
                            >
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                            </svg>
                            <span className="text-sm">(Esc)</span>
                        </div>

                        {/*  <!-- Add margin if you want to see some of the overlay behind the modal--> */}
                        <div className="modal-content py-4 text-left px-6">
                            {/*  title */}
                            <div className="flex justify-between items-center px-5 pb-5">
                                <p className="text-2xl font-bold">
                                    Add or modify preferences
                                </p>
                                <div className="modal-close cursor-pointer z-50">
                                    <svg
                                        className="fill-current text-black"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                    >
                                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Body */}
                            <p>choose day: dd.MM.yyyy</p>

                            <div className="flex">
                                {/* option 1 */}
                                <div className="border-5 border-red-600 p-5">
                                    <h3>Preference 1</h3>

                                    <label className="block">
                                        <span className="text-gray-700">
                                            Name
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        className="form-input mt-1 block w-full"
                                        placeholder="..."
                                        style={{
                                            backgroundColor: 'red',
                                            zIndex: '999',
                                        }}
                                    />
                                    <label className="block">
                                        <span className="text-gray-700">
                                            Description
                                        </span>
                                        <textarea
                                            className="form-textarea mt-1 block w-full"
                                            rows="3"
                                            placeholder="Enter some short description."
                                        ></textarea>
                                    </label>
                                    <div className="block">
                                        <span className="text-gray-700">
                                            Observation
                                        </span>
                                        <div className="mt-2">
                                            <div>
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        className="form-checkbox"
                                                        /* checked */
                                                    />
                                                    <span className="ml-2">
                                                        Vegetarian
                                                    </span>
                                                </label>
                                            </div>
                                            <div>
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        className="form-checkbox"
                                                    />
                                                    <span className="ml-2">
                                                        Vegan
                                                    </span>
                                                </label>
                                            </div>
                                            <div>
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        className="form-checkbox"
                                                    />
                                                    <span className="ml-2">
                                                        Gluten free
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* option 2 */}
                                <div className="border-5 border-red-600 p-5">
                                    <h3>Preference 2</h3>

                                    <label className="block">
                                        <span className="text-gray-700">
                                            Nombre
                                        </span>
                                        <input
                                            type="email"
                                            className="form-input mt-1 block w-full"
                                            placeholder="..."
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="text-gray-700">
                                            Description
                                        </span>
                                        <textarea
                                            className="form-textarea mt-1 block w-full"
                                            rows="3"
                                            placeholder="Enter some short description."
                                        ></textarea>
                                    </label>
                                    <div className="block">
                                        <span className="text-gray-700">
                                            Observation
                                        </span>
                                        <div className="mt-2">
                                            <div>
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        className="form-checkbox"
                                                        /* checked */
                                                    />
                                                    <span className="ml-2">
                                                        Vegetarian
                                                    </span>
                                                </label>
                                            </div>
                                            <div>
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        className="form-checkbox"
                                                    />
                                                    <span className="ml-2">
                                                        Vegan
                                                    </span>
                                                </label>
                                            </div>
                                            <div>
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        className="form-checkbox"
                                                    />
                                                    <span className="ml-2">
                                                        Gluten free
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="flex justify-end pt-2">
                                <button className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">
                                    modify
                                </button>
                                <button className="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* )} */}
        </>
    );
}
