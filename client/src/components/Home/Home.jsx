import React, { useState, useEffect } from 'react';
import UserService from '../../redux/services/user.service';

import Content from '../Main/Content';
import Hero from './Hero';

const Home = () => {
    const [content, setContent] = useState('');
    /* 
    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    }, []);
 */
    return (
        <div>
            <h3 className="bg-red-400">{content}</h3>
            <Hero />
            <Content />
        </div>
    );
};

export default Home;
