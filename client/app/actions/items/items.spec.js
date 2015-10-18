'use strict';

import { expect, spy } from 'chai';
import { ADD_ITEM, TOGGLE_COMPLETE_ITEM, REMOVE_ITEM } from '../../constants/items';
import { addItem, toggleCompleteItem, removeItem } from './items';

describe('Items Action Creator', () => {
  it('should create an add item action', () => {
    expect(addItem("Make Eggs")).to.eql({
      type: ADD_ITEM,
      text: "Make Eggs"
    });
  });

  it('should create an add item action', () => {
    expect(toggleCompleteItem("Make Eggs")).to.eql({
      type: TOGGLE_COMPLETE_ITEM,
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