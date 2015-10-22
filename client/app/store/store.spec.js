'use strict';

import { expect } from 'chai';
import makeStore from './store';
import { setVisibilityFilter } from '../actions/filter/filter';
import { SET_VISIBILITY_FILTER, SHOW_ALL, SHOW_COMPLETED } from '../constants/filter';
import {
  addedItem,
  updatedItem,
  removedItem,
  receivedItems
} from '../actions/items/items';

describe('Store', () => {
  let store, state;

  beforeEach(() => {
    store = makeStore();
    state = store.getState();
  });

  it('should start with an initial state', () => {
    expect(state).to.eql({
      filter: SHOW_ALL,
      items: []
    });
  });

  it('should set a filter', () => {
    store.dispatch(setVisibilityFilter(SHOW_COMPLETED));
    const nextState = store.getState();

    expect(nextState).to.eql({
      filter: SHOW_COMPLETED,
      items: []
    });
  });

  it('should add an item', () => {
    const item = {
      _id: '123',
      text: 'Make Eggs',
      completed: false
    };
    store.dispatch(addedItem(item));
    const nextState = store.getState();

    expect(nextState).to.eql({
      filter: SHOW_ALL,
      items: [item]
    });
  });

  it('should update an item', () => {
    const itemOne = {
      _id: '123',
      text: 'Make Eggs',
      completed: false
    };

    const itemTwo = {
      _id: '456',
      text: 'Buy Milk',
      completed: false
    };

    const updatedItemOne = {
      _id: '123',
      text: 'Make Eggs',
      completed: true
    };

    store.dispatch(addedItem(itemOne));
    store.dispatch(addedItem(itemTwo));
    store.dispatch(updatedItem(updatedItemOne));
    const nextState = store.getState();

    expect(nextState).to.eql({
      filter: SHOW_ALL,
      items: [updatedItemOne, itemTwo]
    });
  });

  it('should remove an item', () => {
    const itemOne = {
      _id: '123',
      text: 'Make Eggs',
      completed: false
    };

    const itemTwo = {
      _id: '456',
      text: 'Buy Milk',
      completed: false
    };

    store.dispatch(addedItem(itemOne));
    store.dispatch(addedItem(itemTwo));
    store.dispatch(removedItem(itemTwo));
    const nextState = store.getState();

    expect(nextState).to.eql({
      filter: SHOW_ALL,
      items: [itemOne]
    });
  });
});