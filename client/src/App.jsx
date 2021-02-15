import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';

import About from './components/Main/About';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div>
                {/* <Menu /> */}
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/login" exact component={Signup} />
                    <Route path="/signup" exact component={Signup} />
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
