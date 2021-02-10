import {combineReducers} from 'redux';
import userReducer from './userReducer';
import clientReducer from './clientReducer'

export default combineReducers({
    userReducer,
    clientReducer,
})

