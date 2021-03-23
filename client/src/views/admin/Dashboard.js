import React from 'react';

// components

import CardStatus from 'components/Cards/cardStatus';
import CardListifUsers from 'components/Cards/CardListofUsers';
import CardListofProducts from 'components/Product/CardListofProducts';

export default function Dashboard() {
    // Products
    const [data, setData] = React.useState([]);
    const [dataUsers, setDataUsers] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/products', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json);
            })
            .catch((err) => console.log(err.message));
    }, []);
    // delete only working from state
    /* React.useEffect(() => {
        fetch(`/api/products/${data._id}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json);
            });
    }, []);
 */

    /*     const handleDelete = (_id) => {
        const delData = data.filter((elem) => elem._id !== _id);
        setData(delData);
    }; */

    // users list
    React.useEffect(() => {
        fetch('/api/users/profiles', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setDataUsers(json);
            });
    }, []);

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full px-4">
                    <CardStatus />
                </div>
            </div>
            <div className="flex flex-wrap mt-4">
                <div className="w-full lg:w-6/12 mb-12 xl:mb-0 px-4">
                    {dataUsers && <CardListifUsers dataUsers={dataUsers} />}
                </div>
                <div className="w-full lg:w-6/12 mb-12 xl:mb-0 px-4">
                    {data && <CardListofProducts data={data} />}
                </div>
            </div>
        </>
    );
}
