'use strict';

import { expect } from 'chai';
import { ADD_TODO, SET_VISIBILITY_FILTER, SHOW_COMPLETED, SHOw_ALL } from '../../constants/filter';
import filter from './filter';

describe('Filter Reducer', () => {
  it('should set a visibility filter', () => {
    const state = SHOw_ALL;

    const nextState = filter(state, {
      type: SET_VISIBILITY_FILTER,
      filter: SHOW_COMPLETED
    });

    expect(nextState).to.eql(SHOW_COMPLETED);
  });
});