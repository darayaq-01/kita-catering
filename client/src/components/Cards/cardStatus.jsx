import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import {
    userSelector,
    fetchUserBytoken,
    clearState,
} from 'features/User/UserSlice';

import Loader from 'react-loader-spinner';
import Timer from 'components/Clock/Clock';

export default function CardStatus() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { isFetching, isError } = useSelector(userSelector);

    useEffect(() => {
        dispatch(fetchUserBytoken({ token: localStorage.getItem('token') }));
    }, []);

    useEffect(() => {
        if (isError) {
            dispatch(clearState());
            history.push('/login');
        }
    }, [isError]);

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    {isFetching ? (
                        <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        />
                    ) : (
                        <>
                            <div className="container mx-auto">
                                Welcome back,{' '}
                                <span className="text-red-500">
                                    {localStorage.getItem('firstName')}
                                </span>
                                <hr />
                                <div>
                                    <Timer />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
