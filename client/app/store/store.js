'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

export default function makeStore() {
  const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
  return createStoreWithMiddleWare(reducers);
};
