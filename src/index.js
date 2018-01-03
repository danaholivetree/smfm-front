import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import routes from './components/nav/Router'


const store = createStore(combineReducers(reducers), applyMiddleware(thunk));




ReactDOM.render(
  <Provider store={store}>
    <App>
      {routes}
    </App>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
