'use strict';

import { expect } from 'chai';
import { ADD_ITEM, REMOVE_ITEM, COMPLETE_ITEM } from '../../constants/items';
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
      type: COMPLETE_ITEM,
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
});