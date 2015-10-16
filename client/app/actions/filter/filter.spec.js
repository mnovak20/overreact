'use strict';

import { expect, spy } from 'chai';
import { SET_VISIBILITY_FILTER, SHOW_ALL, SHOW_COMPLETED } from '../../constants/filter';
import { setVisibilityFilter } from './filter';

describe('Filter Action Creator', () => {
  it('should create an set visibility filter action', () => {
    expect(setVisibilityFilter(SHOW_ALL)).to.eql({
      type: SET_VISIBILITY_FILTER,
      filter: SHOW_ALL
    });
  });

  it('should create an set visibility filter action', () => {
    expect(setVisibilityFilter(SHOW_COMPLETED)).to.eql({
      type: SET_VISIBILITY_FILTER,
      filter: SHOW_COMPLETED
    });
  });
});