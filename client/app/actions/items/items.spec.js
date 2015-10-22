'use strict';

import { expect, spy } from 'chai';
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
import {
  addingItem,
  addedItem,
  updatingItem,
  updatedItem,
  removingItem,
  removedItem,
  receivingItems,
  receivedItems
} from './items';

describe('Items Action Creator', () => {
  it('should create a receiving items function', () => {
    expect(receivingItems()).to.be.a.function;
  });

  it('should create a received items action', () => {
    expect(receivedItems([{
      text: 'Make Eggs',
      completed: false
    }])).to.eql({
        type: RECEIVED_ITEMS,
        items: [{
          text: 'Make Eggs',
          completed: false
        }]
      });
  });

  it('should create an adding item function', () => {
    expect(addingItem({ text: 'Make Eggs' })).to.be.a.function;
  });

  it('should create an added item action', () => {
    expect(addedItem({ text: 'Make Eggs' })).to.eql({
      type: ADDED_ITEM,
      item: { text: 'Make Eggs' }
    });
  });

  it('should create a updating item function', () => {
    expect(updatingItem("123")).to.be.a.function;
  });

  it('should create an updated item action', () => {
    expect(updatedItem({ text: 'Make Eggs' })).to.eql({
      type: UPDATED_ITEM,
      item: { text: 'Make Eggs' }
    });
  });

  it('should create an removing item function', () => {
    expect(removingItem({ text: 'Make Eggs' })).to.be.a.function;
  });

  it('should create an removed item action', () => {
    expect(removedItem({ text: 'Make Eggs' })).to.eql({
      type: REMOVED_ITEM,
      item: { text: 'Make Eggs' }
    });
  });
});