import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';

import About from './components/Main/About';
import Home from './components/Home/Home';

import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import BoardUser from './components/Dashboards/BoardUser';
import BoardFacilities from './components/Dashboards/BoardFacilities';
import BoardAdmin from './components/Dashboards/BoardAdmin';
import { clearMessage } from './redux/actions/message';
import RegisterFacility from './components/Auth/RegisterFacility';
import RegisterParents from './components/Auth/RegisterParents';
import { history } from './helpers/history';

import './App.css';

/* testing */
import Register from './components/Auth/Register';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage());
        });
    }, [dispatch]);

    return (
        <Router history={history}>
            <Navbar />
            <Switch>
                <Route exact path={['/', '/home']} component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/login" component={Login} />
                {/* testing */}
                <Route exact path="/register" component={Register} />
                <Route exact path="/signup" component={Signup} />
                {/* join the registers */}
                <Route path="/user" component={BoardUser} />
                <Route path="/facilities" component={BoardFacilities} />
                <Route path="/admin" component={BoardAdmin} />
                <Route path="/register/facility" component={RegisterFacility} />
                <Route path="/register/user" component={RegisterParents} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
