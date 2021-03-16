import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Datatable from './Datatable';

require('es6-promise').polyfill();
require('isomorphic-fetch');

// components

export default function ListUsers({ color }) {
    const [data, setData] = useState([]);
    const [q, setQ] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/api/users', {
            method: 'get',
            headers: {
                authorization: `Bearer ${sessionStorage.getItem('accessJWT')}`,
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json);
            });
    }, []);
    return (
        <>
            <div
                className={
                    'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
                    (color === 'light' ? 'bg-white' : 'bg-blue-900 text-white')
                }
            >
                {/* header */}
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                    'font-semibold text-lg ' +
                                    (color === 'light'
                                        ? 'text-gray-800'
                                        : 'text-white')
                                }
                            >
                                List of users
                            </h3>
                        </div>
                    </div>
                </div>
                {data.length ? <Datatable data={data} /> : null}

                {/*   <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        
                    </table>
                </div> */}
            </div>
        </>
    );
}

ListUsers.defaultProps = {
    color: 'light',
};

ListUsers.propTypes = {
    color: PropTypes.oneOf(['light', 'dark']),
};
