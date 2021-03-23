import React from 'react';
import { format } from 'date-fns';

const date = format(new Date(), 'MMMM do, yyyy. eeee');
const useNewTimer = (currentDate) => {
    const [date, setDate] = React.useState(currentDate);
    React.useEffect(() => {
        var timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    });
    function tick() {
        setDate(new Date());
    }
    return date;
};

export default function Timer(props) {
    const clock = useNewTimer(new Date());

    return (
        <div className="pl-5 ">
            <p className="pl-5">{date}</p>
            <p className="pl-5">{clock.toLocaleTimeString()}</p>
        </div>
    );
}
