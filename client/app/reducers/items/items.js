'use strict';

import _ from 'lodash';
import { ADD_ITEM, TOGGLE_COMPLETE_ITEM, REMOVE_ITEM, RECEIVED_ITEMS } from '../../constants/items';

export default function items(state = [], action) {
  let index;

  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state, {
          text: action.text,
          completed: false
        }
      ];

    case TOGGLE_COMPLETE_ITEM:
      index = _.findIndex(state, function(item) {
        return item.text === action.text;
      });

      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          completed: state[index].completed ? false : true
        }),
        ...state.slice(index + 1)
      ];

    case REMOVE_ITEM:
      index = _.findIndex(state, function(item) {
        return item.text === action.text;
      });

      return [...state.slice(0, index),
        ...state.slice(index + 1)
      ];

    case RECEIVED_ITEMS:
      return action.items;

    default:
      return state;
  }
}