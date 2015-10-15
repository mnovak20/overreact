'use strict';

import { expect } from 'chai';
import { SET_VISIBILITY_FILTER, SHOW_ALL, SHOW_COMPLETED } from '../../constants/filter';
import filter from './filter';

describe('Filter Reducer', () => {
  it('should handle initial state', () => {
    expect(filter(undefined, {})).to.eql(SHOW_ALL);
  });

  it('should set a filterfilter', () => {
    const state = SHOW_ALL;

    const nextState = filter(state, {
      type: SET_VISIBILITY_FILTER,
      filter: SHOW_COMPLETED
    });

    expect(nextState).to.eql(SHOW_COMPLETED);
  });
});