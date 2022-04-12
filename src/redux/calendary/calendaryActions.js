import { CHANGE_ANIMATION, CHANGE_MONTH, RETURN_TO_ACTIVE_MONTH, ADD_EVENT } from './types';

const changeMonth = item => ({
    type: CHANGE_MONTH, item
})

const changeAnimation = () => ({
    type: CHANGE_ANIMATION
})

const returnToActiveMonth = () => ({
    type: RETURN_TO_ACTIVE_MONTH
})

const addEventToCalendary = item => ({
    type: ADD_EVENT, item
})

export default {
    changeMonth,
    changeAnimation,
    returnToActiveMonth,
    addEventToCalendary
}