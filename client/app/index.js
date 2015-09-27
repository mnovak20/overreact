'use strict';

import React from 'react';
import App from './components/App';
import { Provider } from 'react-redux';
import makeStore from './store/store';

if (process.env.NODE_ENV !== 'test') {
  require('../assets/style.css');
}

const store = makeStore();

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('root')
);