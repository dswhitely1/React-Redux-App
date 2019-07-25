import {createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import weather from './weather/reducers';

const rootReducer = combineReducers({weather});

const middleware = [logger];

const enhancers = applyMiddleware(...middleware);

export default createStore(rootReducer,composeWithDevTools(enhancers));