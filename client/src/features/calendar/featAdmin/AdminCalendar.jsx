import React, { useState } from 'react';

import format from 'date-fns/format';

import addMonths from 'date-fns/addMonths';
import subMonths from 'date-fns/subMonths';
import addDays from 'date-fns/addDays';
import startOfWeek from 'date-fns/startOfWeek';
import startOfMonth from 'date-fns/startOfMonth';
import endOfWeek from 'date-fns/endOfWeek';
import endOfMonth from 'date-fns/endOfMonth';
import isSameDay from 'date-fns/isSameDay';
import isSameMonth from 'date-fns/isSameMonth';
import toDate from 'date-fns/toDate';
import useOnclickOutside from 'react-cool-onclickoutside';

// to set day names in german language
// import deutschLocale from 'date-fns/locale/de';
// set up in this way:
// { format(currentDate, dateFormat, { locale: deutschLocale, });
//

import '../calendar.css';
import ModalInput from './ModalInput';

const AdminCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    const [selectedcell, setCell] = useState('');

    /* header  - arrows to check other months */

    const ref = useOnclickOutside(() => {
        setShowModal(false);
        console.log('clicked outside modal');
    });

    const modalHelper = (e) => {
        console.log(e.target.id);
        setCell(e.target.id);
    };

    const header = () => {
        const dateFormat = 'MMMM yyy';
        return (
            <div className="header row flex-middle">
                <div className="column col-start">
                    <div className="icon" onClick={prevMonth}>
                        chevron_left
                    </div>
                </div>
                <div className="column col-center">
                    <span>{format(currentDate, dateFormat)}</span>
                </div>
                <div className="column col-end">
                    <div className="icon" onClick={nextMonth}>
                        chevron_right
                    </div>
                </div>
            </div>
        );
    };

    const daysOfWeek = () => {
        const dateFormat = 'E';
        const days = [];
        let startDate = startOfWeek(currentDate);
        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="column col-center" key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </div>
            );
        }
        return <div className="days row">{days}</div>;
    };

    const cells = () => {
        const monthStart = startOfMonth(currentDate);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);
        const dateFormat = 'd';
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = '';
        const handleClickBtn = () => {
            setShowModal(!showModal);
        };

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);

                const cloneDay = day;
                const onClickFunc = () => onDateClick(toDate(cloneDay));

                days.push(
                    <div
                        className={`column cell ${
                            !isSameMonth(day, monthStart)
                                ? 'disabled'
                                : isSameDay(day, selectedDate)
                                ? 'selected'
                                : ''
                        }`}
                        key={day}
                        onClick={(e) => {
                            onClickFunc();
                            modalHelper(e);
                        }}
                    >
                        <span className="number">{formattedDate}</span>
                        {/* <span className="bg">{formattedDate}</span>{' '} */}
                        <span>
                            <button
                                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                style={{
                                    transition: 'all .15s ease',
                                    backgroundColor: 'blue',
                                }}
                                id={day}
                                onClick={handleClickBtn}
                            >
                                edit
                            </button>
                            {/* <ModalInput
                                isDisplayed={showModal}
                                ref_function={ref}
                                options={[{}, {}]}
                            /> */}
                        </span>
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>
                    {' '}
                    {days}{' '}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    };

    const nextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    };

    const prevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
    };

    const onDateClick = (day) => {
        setSelectedDate(day);
    };

    return (
        <div className="calendar">
            <div>{header()}</div>
            <div>{daysOfWeek()}</div>
            <div>{cells()}</div>
            {selectedcell !== '' ? (
                <ModalInput selectedDate={setSelectedDate} />
            ) : null}
        </div>
    );
};

export default AdminCalendar;
