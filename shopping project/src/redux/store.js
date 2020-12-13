import { createStore, applyMiddleware } from 'react-redux';
import logger from 'react-redux';
import rootReducer from './root-reducer';

const middlewares = [logger];
const store = createStore( rootReducer, applyMiddleware(...middlewares))

export default store;
