'use strict';

import { expect } from 'chai';
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
import items from './items';

describe('Items Reducer', () => {
  it('should handle initial state', () => {
    expect(items(undefined, {})).to.eql([]);
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

  it('should add an item', () => {
    const state = [];

    const item = {
      _id: "123",
      text: "Make Eggs",
      completed: false
    };
    const nextState = items(state, {
      type: ADDED_ITEM,
      item
    });

    expect(nextState).to.eql([item]);
  });

  it('should update an item', () => {
    const state = [{
      _id: "123",
      text: 'Make Eggs',
      completed: true
    }, {
      _id: "456",
      text: "Buy Milk",
      completed: false
    }];

    const nextState = items(state, {
      type: UPDATED_ITEM,
      item: {
        _id: "456",
        text: "Buy Milk",
        completed: true
      }
    });

    expect(nextState).to.eql([{
      _id: "123",
      text: 'Make Eggs',
      completed: true
    }, {
      _id: "456",
      text: "Buy Milk",
      completed: true
    }]);
  });

  it('should remove an item', () => {
    const state = [{
      _id: "123",
      text: 'Make Eggs',
      completed: true
    }, {
      _id: "456",
      text: "Buy Milk",
      completed: false
    }, {
      _id: "789",
      text: "Get Water",
      completed: true
    }];

    const nextState = items(state, {
      type: REMOVED_ITEM,
      item: {
        _id: "456",
        text: "Buy Milk",
        completed: false
      }
    });

    expect(nextState).to.eql([{
      _id: "123",
      text: 'Make Eggs',
      completed: true
    }, {
      _id: "789",
      text: "Get Water",
      completed: true
    }]);
  });
});