'use strict';

import { expect } from 'chai';
import makeStore from './store';
import { increment, decrement } from '../actions/counter/counter';
import { INCREMENT, DECREMENT } from '../constants/counter';

describe('Store', () => {
  let store, state;

  beforeEach(() => {
    store = makeStore();
    state = store.getState();
  });

  it('should start with an initial state', () => {
    expect(state).to.eql({
      counter: 0
    });
  });

  it('should increment', () => {
    store.dispatch(increment());
    const nextState = store.getState();

    expect(nextState).to.eql({
      counter: 1
    });
  });

  it('should decrement', () => {
    store.dispatch(increment());
    const nextState = store.getState();

    expect(nextState).to.eql({
      counter: 1
    });
  });
});