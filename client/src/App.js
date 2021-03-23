import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// layouts

import Admin from 'layouts/Admin.js';
import Auth from 'layouts/Auth.js';
import User from 'layouts/User.js';

// views without layouts
/* here comes only the public routes */

import Home from 'views/Home';
import About from 'views/About';
import Contact from 'views/Contact';

// private
// if PrivateRoute is set up to a layout, that affect also to their childrens
import { PrivateRoute } from 'helpers/PrivateRoute';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                {/* add routes with layouts */}
                <Route path="/auth" component={Auth} />
                <PrivateRoute path="/admin" component={Admin} />
                <PrivateRoute path="/user" component={User} />
                {/* add routes without layouts */}
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                {/* add redirect for first page */}
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
