import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

// layouts
import Admin from 'layouts/Admin';
import Auth from 'layouts/Auth';

// views without layouts
import Home from 'views/Home';
import About from 'views/About';
import Contact from 'views/Contact';
import Dashboard from 'views/admin/Dashboard';
import PrivateRoute from 'views/admin/PrivateRoute';
import UserVerification from 'views/admin/UserVerification';

function App() {
    return (
        <>
            <Router>
                <Switch>
                    {/* add routes without layouts */}
                    <Route path={['/', '/home']} exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/auth" component={Auth} />
                    <Route
                        path="/verification/:_id/:email"
                        exact
                        component={UserVerification}
                    />
                    <PrivateRoute
                        path="/admin/dashboard"
                        exact
                        component={Dashboard}
                    />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
        </>
    );
}

export default App;
