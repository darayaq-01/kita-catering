import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// components

import AdminNavbar from 'components/Navbars/AdminNavbar';
import Sidebar from 'views/admin/Sidebar/Sidebar';
import FooterAdmin from 'components/Footers/FooterAdmin';

// views

import AdminDashboard from 'views/admin/adminDashboard/AdminDashboard';
import Settings from 'views/admin/settings/Settings';
import Tables from 'views/admin/adminDashboard/Tables';
import CalendarForm from 'features/calendar/featAdmin/CalendarForm';

export default function Admin() {
    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-gray-400">
                <AdminNavbar />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <Switch>
                        <Route
                            path="/admin/dashboard"
                            exact
                            component={AdminDashboard}
                        />
                        <Route
                            path="/admin/settings"
                            exact
                            component={Settings}
                        />
                        <Route path="/admin/tables" exact component={Tables} />
                        <Route
                            path="/admin/add-option"
                            exact
                            component={CalendarForm}
                        />
                        <Redirect from="/admin" to="/admin/dashboard" />
                    </Switch>
                    <FooterAdmin />
                </div>
            </div>
        </>
    );
}
