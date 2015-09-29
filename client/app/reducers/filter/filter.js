'use strict';

import { SET_VISIBILITY_FILTER, SHOW_ALL } from '../../constants/filter';

export default function filter(state = SHOW_ALL , action) {
 switch (action.type) {
   case SET_VISIBILITY_FILTER:
      return action.filter;
   default:
     return state;
 }
}