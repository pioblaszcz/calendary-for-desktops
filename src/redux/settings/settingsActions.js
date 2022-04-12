import { CHANGE_DARK_MODE } from './types';

const changeTheme = item => ({
    type: CHANGE_DARK_MODE, item
})

export default {
    changeTheme,
}