import {combineReducers} from 'redux'
import userReducer from './userReducer'
import articleReducer from './articleReducer'
import productReducer from './productReducer'
import appointmentReducer from './appointmentReducer';
import messagesReducer from './messagesReducer';



const rootReducer = combineReducers({
                    userReducer, articleReducer, productReducer,appointmentReducer,messagesReducer
})
export default rootReducer