import React from 'react';
import { useSelector } from 'react-redux';

import { DayCell, DayStyle } from './Day.css';

const Day = (props) => {

    const { active, day, inMonth } = props.day;

    const store = useSelector(store => store.settings);
    const calendaryStore = useSelector(store => store.calendary);
    return (
        <DayCell>
            <DayStyle active={(new Date()).getMonth() === calendaryStore.activeMonth && active} inMonth={inMonth} darkMode={store.darkMode}>
                <p>{day}</p>
            </DayStyle>
        </DayCell>
    )
}

export default Day;