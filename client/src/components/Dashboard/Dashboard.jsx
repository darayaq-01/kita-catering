import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../_actions/user.actions';

import Calendar from './Calendar';
import UserData from './UserData';
import UsersCalendar from './UsersCalendar';

const Dashboard = () => {
    const users = useSelector((state) => state.users);
    const user = useSelector((state) => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    });

    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }
    return (
        <>
            <div className="container">
                <h1>Hi {user.firstName} to your dashboars!</h1>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && (
                    <span className="text-red-800">ERROR: {users.error}</span>
                )}
                {users.items && (
                    <ul>
                        {users.items.map((user, index) => (
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {user.deleting ? (
                                    <em> - Deleting...</em>
                                ) : user.deleteError ? (
                                    <span className="text-red-400">
                                        {' '}
                                        - ERROR: {user.deleteError}
                                    </span>
                                ) : (
                                    <span>
                                        {' '}
                                        -{' '}
                                        <a
                                            href="#/"
                                            onClick={() =>
                                                handleDeleteUser(user.id)
                                            }
                                            className="text-red-800"
                                        >
                                            Delete
                                        </a>
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
            <div>
                <h1>Dashboard</h1>
                <UserData />
                <UsersCalendar />
                <Calendar />
            </div>
        </>
    );
};

export default Dashboard;
