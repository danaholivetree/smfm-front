import { createStore, applyMiddleware, combineReducers } from 'redux';
//import reducers
import AppReducer from './reducers/AppReducer';

const preloadedState = {
  loggedIn: false,
  friends: [],
  currentUser: {},
  itemsForSale: [],
  feedItems: [],
  bookmarks: [],
  cart: []
}
let store = createStore(AppReducer, preloadedState)
    // combineReducers({
    //     AppReducer
    // })
    // applyMiddleware(
    //     logger(),
    //     promise()
    // )

  export default store
