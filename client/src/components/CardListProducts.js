import axios from 'axios';
import React, { useEffect } from 'react';

export default function CardListProducts() {
    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        axios({
            url: '/api/products/',
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => {
                setProducts(response.data);
            })
            .catch((err) => console.log(err.message));
        /* return () => {
            cleanup;
        }; */
    }, []);

    return (
        <div>
            <p>sd</p>
        </div>
    );
}
