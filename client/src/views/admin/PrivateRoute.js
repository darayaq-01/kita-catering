import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from 'views/auth/Login/loginSlice';
import { getUserProfile } from './userAction';

import { fetchNewAccessJWT } from '_api/userApi';
import AdminDashboard from './adminDashboard/AdminDashboard';
import Admin from "layouts/Admin"

const PrivateRoute = ({ component: children, Component, ...rest }) => {
    const dispatch = useDispatch();
    const { isAuth } = useSelector((state) => state.login);

    useEffect(() => {
        const updateAccessJWT = async () => {
            const result = await fetchNewAccessJWT();
            result && dispatch(loginSuccess());
        };

        !sessionStorage.getItem('accessJWT') &&
            localStorage.getItem('kitaCateringSite') &&
            updateAccessJWT();

        !isAuth &&
            sessionStorage.getItem('accessJWT') &&
            dispatch(loginSuccess());
    }, [dispatch, isAuth]);

    return (
        <Route
            {...rest}
            render={() =>
                isAuth ? <Admin>{children}</Admin> : <Redirect to="/auth/login" />
            }
        />
    );
};

export default PrivateRoute;
