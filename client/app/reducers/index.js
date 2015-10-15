'use strict';

import { combineReducers } from 'redux';
import filter from './filter/filter';

const reducers = combineReducers({
  filter
});

export default reducers;