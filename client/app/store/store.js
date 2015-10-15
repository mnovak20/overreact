'use strict';

import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const logger = createLogger();

const createStoreWithMiddleWare = applyMiddleware(thunk, logger)(createStore);

export default function makeStore() {
  return createStoreWithMiddleWare(reducers);
};
