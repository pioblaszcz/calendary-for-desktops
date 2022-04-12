import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import { hidingTemplateMiddleware } from './middleware/hidingTemplateMiddleware';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(hidingTemplateMiddleware)),
);

export default store; 
