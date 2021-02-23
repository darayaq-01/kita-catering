import React, { useState, useEffect } from 'react';
import UserService from '../../redux/services/user.service';

const BoardAdmin = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        UserService.getAdminBoard().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    });
    return (
        <section>
            <h1>{content}</h1>
            <p>hello</p>
        </section>
    );
};

export default BoardAdmin;
