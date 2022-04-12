import { CHANGE_DARK_MODE } from './types';
import produce from 'immer';

const INITIAL_STATE = {
    darkMode: false,
}

const settingsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_DARK_MODE:
            return produce(state, draftState => {
                draftState.darkMode = !draftState.darkMode
            })
        default:
            return state;
    }
}

export default settingsReducer