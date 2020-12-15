import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import {logger} from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;


