'use strict';

import { ADD_ITEM, COMPLETE_ITEM, REMOVE_ITEM } from '../../constants/items';

export function addItem(text) {
  return {
    type: ADD_ITEM,
    text: text
  };
}

export function completeItem(text) {
  return {
    type: COMPLETE_ITEM,
    text: text
  };
}

export function removeItem(text) {
  return {
    type: REMOVE_ITEM,
    text: text
  };
}

