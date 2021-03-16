import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Datatable({ data, color }) {
    //const columns = data[0] && Object.keys(data[0]);
    let columns = [];
    for (let prop in data[0]) {
        console.log(prop);
        columns = [...columns, prop];
        console.log(columns);
    }

    /* for (let property in data[0]) {
        setColumns([...columns, property]);
    } */

    return (
        <table
            className="items-center w-full bg-transparent border-collapse"
            /* cellPadding={0}
            cellSpacing={0} */
        >
            <thead
                className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left ' +
                    (color === 'light'
                        ? 'bg-gray-100 text-gray-600 border-gray-200'
                        : 'bg-blue-800 text-blue-300 border-blue-700')
                }
            >
                <tr>
                    <th>
                        <td>firstName</td>
                        <td>last name</td>
                        {/* <td>email</td>
                            <td>password</td> */}
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((elem) => (
                    <tr>
                        <td>{elem.firstName}</td>
                        <td>{elem.lastName}</td>
                        {/*   <td>{elem.email}</td>
                        <td>{elem.password}</td>
                        <td>{elem.createdAt}</td>
                        <td>{elem.updatedAt}</td>
                        <td>{elem._id}</td> */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
Datatable.defaultProps = {
    color: 'light',
};

Datatable.propTypes = {
    color: PropTypes.oneOf(['light', 'dark']),
};
