import { CHANGE_ANIMATION, CHANGE_MONTH, RETURN_TO_ACTIVE_MONTH, ADD_EVENT } from './types';
import produce from 'immer';

const date = new Date();

const INITIAL_STATE = {
    activeMonth: date.getMonth(),
    activeDay: date.getDate(),
    activeYear: date.getFullYear(),
    isChanging: false,
    events: []
}

const calendaryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_MONTH:
            return produce(state, draftState => {
                draftState.activeMonth += action.item
            })
        case CHANGE_ANIMATION:
            return produce(state, draftState => {
                draftState.isChanging = !draftState.isChanging
            })
        case RETURN_TO_ACTIVE_MONTH:
            return produce(state, draftState => {
                draftState.activeMonth = date.getMonth()
            })
        case ADD_EVENT:
            return produce(state, draftState => {
                draftState.events.push(action.item)
            })
        default:
            return state;
    }
}

export default calendaryReducer;