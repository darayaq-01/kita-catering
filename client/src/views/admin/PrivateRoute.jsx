import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from 'views/auth/Login/loginSlice';
import { getUserProfile } from './userAction';

import { fetchNewAccessJWT } from '_api/userApi';
import Dashboard from './Dashboard';

const PrivateRoute = ({ children, ...rest }) => {
    const dispatch = useDispatch();
    const { isAuth } = useSelector((state) => state.login);
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        const updateAccessJWT = async () => {
            const result = await fetchNewAccessJWT();
            result && dispatch(loginSuccess());
        };

        !user._id && dispatch(getUserProfile());

        !sessionStorage.getItem('accessJWT') &&
            localStorage.getItem('kitaCateringSite') &&
            updateAccessJWT();

        !isAuth &&
            sessionStorage.getItem('accessJWT') &&
            dispatch(loginSuccess());
    }, [dispatch, isAuth, user._id]);

    return (
        <Route
            {...rest}
            render={() =>
                isAuth ? <Dashboard>{children}</Dashboard> : <Redirect to="/" />
            }
        />
    );
};

export default PrivateRoute;
