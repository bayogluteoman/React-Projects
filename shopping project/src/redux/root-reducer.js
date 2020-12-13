 import { combineReducers } from 'react-redux';
 import userReducer from './user/user.reducer';

 export default combineReducers({
     user:userReducer
 });
