import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
// import PropTypes from 'prop-types'
import { createStore, applyMiddleware } from 'redux'
import AppReducer from './reducers/AppReducer'
import thunk from 'redux-thunk'
// import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import './index.css'
import App from './App'

const API = process.env.REACT_APP_API_URL


const initialState = {
  loggedIn: false,
  friends: [],
  currentUser: {},
  itemsForSale: [],
  feedItems: [],
  bookmarks: [],
  cart: [],
  filteredItems: []
}
let store = createStore(AppReducer, initialState, applyMiddleware(thunk.withExtraArgument(API)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>

, document.getElementById('root'));
registerServiceWorker();
