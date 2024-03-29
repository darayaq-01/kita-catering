import React from 'react';
import { useHistory } from 'react-router-dom';

import { createPopper } from '@popperjs/core';

/* import { userLogout } from '_api/userApi'; */

const UserDropdown = () => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: 'bottom-start',
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    const history = useHistory();
    const onLogOut = () => {
        localStorage.removeItem('token');
        history.push('/');
        alert('bye');
    };

    return (
        <>
            <a
                className="text-gray-600 block"
                href="/#"
                ref={btnDropdownRef}
                onClick={(e) => {
                    e.preventDefault();
                    dropdownPopoverShow
                        ? closeDropdownPopover()
                        : openDropdownPopover();
                }}
            >
                <div className="items-center flex">
                    <span className="w-12 h-12 text-sm text-white bg-gray-300 inline-flex items-center justify-center rounded-full">
                        <img
                            alt="..."
                            className="w-full rounded-full align-middle border-none shadow-lg"
                            /* src={require("assets/img/team-1-800x800.jpg")} */
                        />
                    </span>
                </div>
            </a>
            <div
                ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? 'block ' : 'hidden ') +
                    'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
                }
            >
                {/*  <a
                    href="/#"
                    className={
                        'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
                    }
                    onClick={(e) => e.preventDefault()}
                >
                    Action
                </a>
                <a
                    href="/#"
                    className={
                        'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
                    }
                    onClick={(e) => e.preventDefault()}
                >
                    Another action
                </a>
                <a
                    href="/#"
                    className={
                        'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
                    }
                    onClick={(e) => e.preventDefault()}
                >
                    Something else here
                </a> */}
                <div className="py-10">
                    <br />
                </div>
                <div className="h-0 my-2 border border-solid border-gray-200" />
                <button
                    className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                        onLogOut();
                    }}
                >
                    Logout
                </button>
            </div>
        </>
    );
};

export default UserDropdown;
