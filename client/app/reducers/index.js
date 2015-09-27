'use strict';

import { combineReducers } from 'redux';
import counter from './counter/counter';

const reducers = combineReducers({
  counter
});

export default reducers;