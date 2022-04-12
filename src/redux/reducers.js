import { combineReducers } from 'redux';

import calendaryReducer from './calendary';
import settingsReducer from './settings';

const rootReduers = combineReducers({
    calendary: calendaryReducer,
    settings: settingsReducer,
})

export default rootReduers;