import { createStore, applyMiddleware, combineReducers } from 'redux'
//import reducers
import AppReducer from './reducers/AppReducer'

import { syncHistoryWithStore, routerReducer, ConnectedRouter } from 'react-router-redux'

const preloadedState = {
  loggedIn: false,
  friends: [],
  currentUser: {},
  itemsForSale: [],
  feedItems: [],
  bookmarks: [],
  cart: []
}
const store = createStore(AppReducer, preloadedState)
// const history = syncHistoryWithStore(browserHistory, store)

    // combineReducers({
    //     AppReducer
    // })
    // applyMiddleware(
    //     logger(),
    //     promise()
    // )
export default store
