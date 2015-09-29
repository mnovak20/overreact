'use strict';

import { combineReducers } from 'redux';
import filter from './filter/filter';
import todo from './todo/todo';

const reducers = combineReducers({
  filter: filter,
  todo: todo
});

export default reducers;