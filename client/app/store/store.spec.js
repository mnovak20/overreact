'use strict';

import { expect } from 'chai';
import makeStore from './store';
import { increment, decrement } from '../actions';

describe('Store', () => {
  it('should start with an initial state', () => {
    const store = makeStore();
    const state = store.getState();

    expect(state.counter).to.equal(0);
  });

  it('should increment', () => {
    const store = makeStore();
    const state = store.getState();

    store.dispatch(increment());

    const nextState = store.getState();

    expect(nextState.counter).to.equal(1);
  });

  it('should decrement', () => {
    const store = makeStore();
    const state = store.getState();

    store.dispatch(decrement());

    const nextState = store.getState();

    expect(nextState.counter).to.equal(-1);
  });
});