'use strict';

import _ from 'lodash';
import {
  ADDING_ITEM,
  ADDED_ITEM,
  UPDATING_ITEM,
  UPDATED_ITEM,
  REMOVING_ITEM,
  REMOVED_ITEM,
  RECEIVING_ITEMS,
  RECEIVED_ITEMS
} from '../../constants/items';

export default function items(state = [], action) {
  let index;

  switch (action.type) {
    case RECEIVED_ITEMS:
      return action.items;

    case ADDED_ITEM:
      return [
        ...state, action.item
      ];

    case UPDATED_ITEM:
      index = _.findIndex(state, function(item) {
        return item._id === action.item._id;
      });

      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], action.item),
        ...state.slice(index + 1)
      ];

    case REMOVED_ITEM:
      index = _.findIndex(state, function(item) {
        return item._id === action.item._id;
      });

      return [...state.slice(0, index),
        ...state.slice(index + 1)
      ];

    default:
      return state;
  }
}