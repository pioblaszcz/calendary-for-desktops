import { CHANGE_MONTH } from '../calendary/types';

export const hidingTemplateMiddleware = store => next => action => {
    if (action.type === CHANGE_MONTH) {
        setTimeout(() => {
            next(action);
        }, 250);
    }
    else next(action);
}