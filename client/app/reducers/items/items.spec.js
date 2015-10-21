'use strict';

import { expect } from 'chai';
import { ADD_ITEM, REMOVE_ITEM, TOGGLE_COMPLETE_ITEM, RECEIVED_ITEMS } from '../../constants/items';
import items from './items';

describe('Items Reducer', () => {
  it('should handle initial state', () => {
    expect(items(undefined, {})).to.eql([]);
  });

  it('should add an item', () => {
    const state = [];

    const nextState = items(state, {
      type: ADD_ITEM,
      text: "Make Eggs"
    });

    expect(nextState).to.eql([{
      text: "Make Eggs",
      completed: false
    }]);
  });

  it('should complete an item', () => {
    const state = [{
      text: 'Make Eggs',
      completed: true
    }, {
      text: "Buy Milk",
      completed: false
    }];

    const nextState = items(state, {
      type: TOGGLE_COMPLETE_ITEM,
      text: "Buy Milk"
    });

    expect(nextState).to.eql([{
      text: 'Make Eggs',
      completed: true
    }, {
      text: "Buy Milk",
      completed: true
    }]);
  });

  it('should incomplete an item', () => {
    const state = [{
      text: 'Make Eggs',
      completed: true
    }, {
      text: "Buy Milk",
      completed: false
    }];

    const nextStateOne = items(state, {
      type: TOGGLE_COMPLETE_ITEM,
      text: "Buy Milk"
    });

    const nextStateTwo = items(nextStateOne, {
      type: TOGGLE_COMPLETE_ITEM,
      text: "Buy Milk"
    });

    expect(nextStateTwo).to.eql([{
      text: 'Make Eggs',
      completed: true
    }, {
      text: "Buy Milk",
      completed: false
    }]);
  });

  it('should delete an item', () => {
    const state = [{
      text: 'Make Eggs',
      completed: true
    }, {
      text: "Buy Milk",
      completed: false
    }, {
      text: "Get Water",
      completed: true
    }];

    const nextState = items(state, {
      type: REMOVE_ITEM,
      text: "Buy Milk"
    });

    expect(nextState).to.eql([{
      text: 'Make Eggs',
      completed: true
    }, {
      text: "Get Water",
      completed: true
    }]);
  });

  it('should received items', () => {
    const list = [{
      text: 'Make Eggs',
      completed: true
    }, {
      text: "Buy Milk",
      completed: false
    }, {
      text: "Get Water",
      completed: true
    }];

    const nextState = items(undefined, {
      type: RECEIVED_ITEMS,
      items: list
    });

    expect(nextState).to.eql(list);
  });
});