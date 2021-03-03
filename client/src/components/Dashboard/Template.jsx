import React from 'react';

import Calendar from './Calendar';
import UserData from './UserData';
import UsersCalendar from './UsersCalendar';

const Template = () => {
    return (
        <>
            <div>
                <h1>Dashboard</h1>
            </div>
            <UserData />
            <UsersCalendar />
            <Calendar />
        </>
    );
};

export default Template;
