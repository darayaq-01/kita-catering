import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// components

import UserNavbar from 'components/Navbars/UserNavbar';
import SidebarUser from 'components/Sidebar/SidebarUser';
/* import HeaderUser from 'components/Headers/HeaderUser'; */
import HeaderAdmin from 'components/Headers/HeaderAdmin';
import FooterUser from 'components/Footers/FooterUser';

// views

import UserDashboard from 'views/user/UserDashboard';
import UserSettings from 'views/user/UserSettings';

export default function User() {
    return (
        <>
            <SidebarUser />
            <div className="relative md:ml-64 bg-gray-200">
                <UserNavbar />
                {/* Header */}
                <HeaderAdmin />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <Switch>
                        <Route
                            path="/user/dashboard"
                            exact
                            component={UserDashboard}
                        />
                        <Route
                            path="/user/settings"
                            exact
                            component={UserSettings}
                        />
                        <Redirect from="/user" to="/user/dashboard" />
                    </Switch>
                    <FooterUser />
                </div>
            </div>
        </>
    );
}
