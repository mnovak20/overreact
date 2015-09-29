'use strict';

import { SET_VISIBILITY_FILTER, SHOW_ALL } from '../../constants/filter';

export function setVisibilityFilter(filter = SHOW_ALL) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  }
}