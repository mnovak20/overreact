'use strict';

import { expect, spy } from 'chai';
import { ADD_ITEM, TOGGLE_COMPLETE_ITEM, REMOVE_ITEM, FETCH_ITEMS } from '../../constants/items';
import { addItem, toggleCompleteItem, removeItem, fetchItems } from './items';

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

  it('should create a fetch items action', () => {
    expect(fetchItems()).to.eql({
      type: FETCH_ITEMS
    });
  });
});