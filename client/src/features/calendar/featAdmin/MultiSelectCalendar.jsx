import React, { useState, useEffect } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default function MultiSelectCalendar(props) {
    const [selectedDays, setSelectedDays] = useState([]);

    useEffect(() => {
        props.setDates([selectedDays]);
    }, [selectedDays]);

    const handleDayClick = (day, { selected }) => {
        if (selected) {
            const selectedIndex = selectedDays.findIndex((selectedDay) =>
                DateUtils.isSameDay(selectedDay, day)
            );
            selectedDays.splice(selectedIndex, 1);
        } else {
            setSelectedDays([...selectedDays, day]);
        }
    };
    return (
        <div>
            <DayPicker
                selectedDays={selectedDays}
                onDayClick={handleDayClick}
            />
        </div>
    );
}
