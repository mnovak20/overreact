'use strict';

import { combineReducers } from 'redux';
import filter from './filter/filter';
import items from './items/items';

const reducers = combineReducers({
  filter,
  items
});

export default reducers;