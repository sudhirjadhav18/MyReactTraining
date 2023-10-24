import React from "react";

const days = [
    { id: 1, name: 'Sunday' },
    { id: 2, name: 'Monday' },
    { id: 3, name: 'Tuesday' },
    { id: 4, name: 'Wednesday' },
    { id: 5, name: 'Thursday' },
    { id: 6, name: 'Friday' },
    { id: 7, name: 'Saturday' }
];

const DayList = () => (
    <>
        <p>List of Days:</p>
        <ul>
            {days.map(item =>
                <li key={item.id}>{item.name}</li>
            )}
        </ul>
    </>
);

export default DayList;