import React from 'react';
import { useSelector } from 'react-redux';

import Day from './Day';
import { DaysWrapper } from './DaysGrid.css';

const DaysGrid = () => {

    const calendaryState = useSelector(state => state.calendary);

    const { activeMonth: month, activeYear: year, activeDay, isChanging } = calendaryState;

    const getDayInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

    const getDayOfFirst = (month, year) => new Date(year, month, 0).getDay();

    const daysNumber = getDayInMonth(month, year);

    const dayOfFirst = getDayOfFirst(month, year);

    const daysInPrevMonth = getDayInMonth(month > 0 ? (month - 1) : 12, month === 0 ? (year - 1) : year)

    const dayTab = [];

    for (let i = 0; i < 42; i++) {

        let day = null;
        let active = false;
        let inMonth = true;

        if (i >= dayOfFirst) {
            if ((i - dayOfFirst + 1) <= daysNumber) day = (i - dayOfFirst + 1);
            else {
                day = (i - dayOfFirst + 1) - daysNumber
                inMonth = false;
            }
        } else {
            day = (daysInPrevMonth - dayOfFirst + i + 1);
            inMonth = false
        }

        if (day === activeDay) active = true;

        dayTab.push({
            day,
            active,
            inMonth,
        })
    }

    return (
        <DaysWrapper isChanging={isChanging}>
            {
                dayTab.map((day, key) => <Day day={day} key={key} />)
            }
        </DaysWrapper>
    )
}

export default DaysGrid;