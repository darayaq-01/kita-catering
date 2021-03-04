import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { history } from './_helpers/history';
import { alertActions } from './_actions/alert.actions';

import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import RegisterFacility from './components/Auth/RegisterFacility';
import RegisterParents from './components/Auth/RegisterParents';
import { PrivateRoute } from './components/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';

import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/Main/About';
import Home from './components/Home/Home';

import './App.css';

function App() {
    const alert = useSelector((state) => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    });

    return (
        <>
            {' '}
            {alert.message && (
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path={['/', '/home']} component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route
                        exact
                        path="/register/facility"
                        component={RegisterFacility}
                    />
                    <Route
                        exact
                        path="/register/user"
                        component={RegisterParents}
                    />
                    <PrivateRoute
                        exact
                        path="/dashboard"
                        component={Dashboard}
                    />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
