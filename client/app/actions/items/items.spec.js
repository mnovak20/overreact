'use strict';

import { expect, spy } from 'chai';
import { ADD_ITEM, COMPLETE_ITEM, REMOVE_ITEM } from '../../constants/items';
import { addItem, completeItem, removeItem } from './items';

describe('Items Action Creator', () => {
  it('should create an add item action', () => {
    expect(addItem("Make Eggs")).to.eql({
      type: ADD_ITEM,
      text: "Make Eggs"
    });
  });

  it('should create an add item action', () => {
    expect(completeItem("Make Eggs")).to.eql({
      type: COMPLETE_ITEM,
      text: "Make Eggs"
    });
  });

  it('should create an add item action', () => {
    expect(removeItem("Make Eggs")).to.eql({
      type: REMOVE_ITEM,
      text: "Make Eggs"
    });
  });
});