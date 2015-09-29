'use strict';

import { expect } from 'chai';
import { SET_VISIBILITY_FILTER, SHOW_COMPLETED } from '../../constants/filter';
import { addTodo, setVisibilityFilter } from './filter';

describe('Filter', () => {
  it('should create a set visibility filter action', () => {
    expect(setVisibilityFilter(SHOW_COMPLETED)).to.eql({
      type: SET_VISIBILITY_FILTER,
      filter: SHOW_COMPLETED
    });
  });
});