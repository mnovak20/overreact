'use strict';

import { expect } from 'chai';
import makeStore from './store';
import { setVisibilityFilter } from '../actions/filter/filter';
import { SET_VISIBILITY_FILTER, SHOW_ALL, SHOW_COMPLETED } from '../constants/filter';

describe('Store', () => {
  let store, state;

  beforeEach(() => {
    store = makeStore();
    state = store.getState();
  });

  it('should start with an initial state', () => {
    expect(state).to.eql({
      filter: SHOW_ALL
    });
  });

  it('should set a filter', () => {
    store.dispatch(setVisibilityFilter(SHOW_COMPLETED));
    const nextState = store.getState();

    expect(nextState).to.eql({
      filter: SHOW_COMPLETED
    });
  });
});