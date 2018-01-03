import { createStore, applyMiddleware, combineReducers } from 'redux';
//import reducers
import * as reducers from './reducers/AppReducer';

export default createStore(
    combineReducers({
        reducers
    })
    // applyMiddleware(
    //     logger(),
    //     promise()
    // )
)
