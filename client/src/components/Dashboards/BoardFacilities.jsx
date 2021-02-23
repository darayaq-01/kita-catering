import React, { useState, useEffect } from 'react';
import UserService from '../../redux/services/user.service';

const BoardFacilities = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        UserService.getFacilitiesBoard().then(
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
            <h1>welcome to faciities dashboard!</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                asperiores, earum consequuntur accusantium beatae inventore
                suscipit alias dolore saepe perferendis, laudantium deserunt ad
                velit nostrum enim temporibus eaque corrupti magni?
            </p>
        </section>
    );
};

export default BoardFacilities;
