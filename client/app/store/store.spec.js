'use strict';

import { expect } from 'chai';
import makeStore from './store';
import { setVisibilityFilter } from '../actions/filter/filter';
import { SET_VISIBILITY_FILTER, SHOW_ALL, SHOW_COMPLETED } from '../constants/filter';
import { addItem, removeItem, completeItem } from '../actions/items/items';

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
    store.dispatch(addItem("Make Eggs"));
    const nextState = store.getState();

    expect(nextState).to.eql({
      filter: SHOW_ALL,
      items: [{
        text: "Make Eggs",
        completed: false
      }]
    });
  });

  it('should complete an item', () => {
    store.dispatch(addItem("Make Eggs"));
    store.dispatch(completeItem("Make Eggs"));
    const nextState = store.getState();

    expect(nextState).to.eql({
      filter: SHOW_ALL,
      items: [{
        text: "Make Eggs",
        completed: true
      }]
    });
  });

  it('should remove an item', () => {
    store.dispatch(addItem("Make Eggs"));
    store.dispatch(removeItem("Make Eggs"));
    const nextState = store.getState();

    expect(nextState).to.eql({
      filter: SHOW_ALL,
      items: []
    });
  });
});