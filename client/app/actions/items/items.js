'use strict';

import { ADD_ITEM, TOGGLE_COMPLETE_ITEM, REMOVE_ITEM, FETCH_ITEMS } from '../../constants/items';

export function fetchItems() {
  return {
    type: FETCH_ITEMS
  };
}

export function addItem(text) {
  return {
    type: ADD_ITEM,
    text: text
  };
}

export function toggleCompleteItem(text) {
  return {
    type: TOGGLE_COMPLETE_ITEM,
    text: text
  };
}

export function removeItem(text) {
  return {
    type: REMOVE_ITEM,
    text: text
  };
}

