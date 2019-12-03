import { combineReducers } from 'redux';
import token from './token';
import users from './users';
import schedule from './schedule';


const xywApp = combineReducers({
    token,
    users,
    schedule
    
});

export default xywApp;