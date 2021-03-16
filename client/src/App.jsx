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
import AdminDashboard from 'views/admin/adminDashboard/AdminDashboard';
import PrivateRoute from 'views/admin/PrivateRoute';
import UserVerification from 'views/admin/UserVerification';

import Settings from 'views/admin/settings/Settings';
import Tables from 'views/admin/Tables';

import ListUsers from 'features/listUsers/ListUsers';
import UserDashboard from 'views/user/userDashboard/UserDashboard';

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
                        component={AdminDashboard}
                    />
                    <PrivateRoute
                        path="/admin/tables"
                        exact
                        component={Tables}
                    />
                    <PrivateRoute
                        path="/admin/settings"
                        exact
                        component={Settings}
                    />
                    <PrivateRoute
                        path="/admin/lists"
                        exact
                        component={ListUsers}
                    />
                    <PrivateRoute
                        path="/user/dashboard"
                        exact
                        component={UserDashboard}
                    />{' '}
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
        </>
    );
}

export default App;
