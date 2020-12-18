import { createStore } from 'redux';
import { applyMiddleware } from 'redux';    // ara katman
import {logger} from 'redux-logger';        //ara katmandan geçerken state’lerimizin ve action’larımızın durumunu öğrenebilmek için logger 
import rootReducer from './root-reducer';

const middlewares = [logger];               //önceki state’inizi action’unuzu ve action sonrası aktive state’inizi browser console’una log olarak basan bir middleware’dır.

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); // createStore u store adında bir değişkene atadık. Middleware değişkenini oluşturduğumuz storun içine yerleştirdik.

export default store;
