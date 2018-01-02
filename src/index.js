import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
// import routes from './routes/Router'
import registerServiceWorker from './registerServiceWorker';
import routes from './components/nav/Router'








ReactDOM.render(
  <App>
  {routes}
  </App>
  , document.getElementById('root'));
registerServiceWorker();
