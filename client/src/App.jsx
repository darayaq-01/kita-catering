import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';

import About from './components/Main/About';
import Home from './components/Home/Home';

import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import RegisterFacility from './components/Auth/RegisterFacility';
import RegisterParents from './components/Auth/RegisterParents';

import './App.css';

function App() {
    return (
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
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
