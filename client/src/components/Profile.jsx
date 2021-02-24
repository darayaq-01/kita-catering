import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = () => {
    const { user: currentUser } = useSelector((state) => state.auth);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <section className="container">
            <header className="bg-yellow-500">
                <strong>{currentUser.username}</strong> Profile
            </header>
            <p>
                <strong>token:</strong>{' '}
                {currentUser.accessToken.substring(0, 20)} ...{' '}
                {currentUser.accessToken.substr(
                    currentUser.accessToken.length - 20
                )}
            </p>
            <p>
                <strong>e-Mail: </strong> {currentUser.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
                {currentUser.roles &&
                    currentUser.roles.map((role, index) => (
                        <li key={index}>{role}</li>
                    ))}
            </ul>
        </section>
    );
};

export default Profile;
