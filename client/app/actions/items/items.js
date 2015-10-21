'use strict';

import axios from 'axios';
import { ADD_ITEM, TOGGLE_COMPLETE_ITEM, REMOVE_ITEM, RECEIVED_ITEMS } from '../../constants/items';

export function fetchItems() {
  return (dispatch, getState) => {
    axios.get('/api/items')
      .then(function(response) {
        dispatch(receivedItems(response.data));
      });
  };
}

export function receivedItems(items) {
  return {
    type: RECEIVED_ITEMS,
    items: items
  }
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

