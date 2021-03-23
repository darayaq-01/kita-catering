import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// components

import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import HeaderAdmin from 'components/Headers/HeaderAdmin';
import FooterAdmin from 'components/Footers/FooterAdmin.js';

// views

import Dashboard from 'views/admin/Dashboard.js';
import Settings from 'views/admin/Settings.js';
import AddProduct from 'views/admin/AddProduct';

export default function Admin() {
    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-gray-200">
                <AdminNavbar />
                {/* Header */}
                <HeaderAdmin />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <Switch>
                        <Route
                            path="/admin/dashboard"
                            exact
                            component={Dashboard}
                        />
                        <Route
                            path="/admin/settings"
                            exact
                            component={Settings}
                        />
                        <Route
                            path="/admin/add-product"
                            exact
                            component={AddProduct}
                        />
                        <Redirect from="/admin" to="/admin/dashboard" />
                    </Switch>
                    <FooterAdmin />
                </div>
            </div>
        </>
    );
}
