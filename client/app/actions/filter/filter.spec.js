'use strict';

import { expect, spy } from 'chai';
import { SET_VISIBILITY_FILTER, SHOW_ALL } from '../../constants/filter';
import { setVisibilityFilter } from './filter';

describe('Filter Action Creator', () => {
  it('should create an increment action', () => {
    expect(setVisibilityFilter(SHOW_ALL)).to.eql({
      type: SET_VISIBILITY_FILTER,
      filtere: SHOW_ALL
    });
  });
});