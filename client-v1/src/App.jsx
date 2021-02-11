import React, { useState, useEffect } from 'react';

import Navbar from './components/Header/Navbar';
import Dropdown from './components/Header/Dropdown';
import Footer from './components/Footer/Footer';

import Home from './pages/Index';
import Register from './pages/Register';

import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    // cambiar esto...
    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', hideMenu);
        return () => {
            window.removeEventListener('resize', hideMenu);
        };
    });

    return (
        <>
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" exact component={Register} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
