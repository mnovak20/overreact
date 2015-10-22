'use strict';

import axios from 'axios';
import {
  RECEIVING_ITEMS,
  RECEIVED_ITEMS,
  ADDING_ITEM,
  ADDED_ITEM,
  UPDATING_ITEM,
  UPDATED_ITEM,
  REMOVING_ITEM,
  REMOVED_ITEM
} from '../../constants/items';

export function receivingItems() {
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

export function addingItem(item) {
  return (dispatch, getState) => {
    axios.post('/api/items', item)
      .then(function(response) {
        dispatch(addedItem(response.data));
      });
  };
}

export function addedItem(item) {
  return {
    type: ADDED_ITEM,
    item: item
  }
}

export function updatingItem(item) {
  return (dispatch, getState) => {
    axios.put(`/api/items/${item._id}`, item)
      .then(function(response) {
        dispatch(updatedItem(response.data));
      });
  };
}

export function updatedItem(item) {
  return {
    type: UPDATED_ITEM,
    item: item
  }
}

export function removingItem(item) {
  return (dispatch, getState) => {
    axios.delete(`/api/items/${item._id}`)
      .then(function(response) {
        dispatch(removedItem(response.data));
      });
  };
}

export function removedItem(item) {
  return {
    type: REMOVED_ITEM,
    item: item
  };
}

