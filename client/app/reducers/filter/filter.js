'use strict';

import { SHOW_ALL, SHOW_COMPLETED, SET_VISIBILITY_FILTER } from '../../constants/filter';

export default function filter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}