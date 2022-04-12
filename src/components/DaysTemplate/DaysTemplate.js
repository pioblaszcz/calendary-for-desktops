import React from 'react';
import { useSelector } from 'react-redux';

import { Template } from './DaysTemplate.css';
import DaysGrid from '../DaysGrid';

const DaysTemplate = () => {

    const store = useSelector(store => store.settings);

    return (
        <Template darkMode={store.darkMode}>
            <div className="days">
                <div className="day">PON</div>
                <div className="day">WT</div>
                <div className="day">SR</div>
                <div className="day">CZW</div>
                <div className="day">PT</div>
                <div className="day">SOB</div>
                <div className="day">NDZ</div>
            </div>
            <DaysGrid />
        </Template>
    )
}

export default DaysTemplate;