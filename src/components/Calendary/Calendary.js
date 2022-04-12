import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DaysTemplate from '../DaysTemplate';
import { settingsActions } from '../../redux/settings'

import { Wrapper, Header } from './Calendary.css';
import { calendaryActions } from '../../redux/calendary';

const MONTHS = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];

const Calendary = () => {

    const dispatch = useDispatch();

    const changeThemeMode = () => {
        dispatch(settingsActions.changeTheme())
    }

    const returnToActive = () => {
        dispatch(calendaryActions.returnToActiveMonth());
    }

    const changeMonth = (item) => {
        dispatch(calendaryActions.changeMonth(item));
        dispatch(calendaryActions.changeAnimation());
        setTimeout(() => dispatch(calendaryActions.changeAnimation()), 500)
    }

    const storeSettings = useSelector(store => store.settings);
    const sotreCalendary = useSelector(store => store.calendary);

    return (
        <Wrapper>
            <Header darkMode={storeSettings.darkMode} isChanging={sotreCalendary.isChanging}>
                {sotreCalendary.activeMonth === 0 ? null : <i className="fas fa-caret-left" onClick={() => changeMonth(-1)}></i>}
                {MONTHS[sotreCalendary.activeMonth]}
                {sotreCalendary.activeMonth === 11 ? null : <i className="fas fa-caret-right" onClick={() => changeMonth(1)}></i>}
                <i className="fas fa-moon" onClick={changeThemeMode}></i>
                {(new Date()).getMonth() !== sotreCalendary.activeMonth ? <i className="activeDay" onClick={returnToActive}>{sotreCalendary.activeDay}</i> : null}
            </Header>
            <DaysTemplate />
        </Wrapper>
    )
}

export default Calendary;