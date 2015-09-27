'use strict';

import { expect } from 'chai';
import makeStore from './store';
import { increment, decrement } from '../actions/counter/counter';

describe('Store', () => {
  it('should start with an initial state', () => {
    const store = makeStore();
    const state = store.getState();

    expect(state).to.eql({
      counter: 0
    });
  });

  it('should increment', () => {
    const store = makeStore();
    const state = store.getState();

    store.dispatch(increment());

    const nextState = store.getState();

    expect(nextState).to.eql({
      counter: 1
    });
  });

  it('should decrement', () => {
    const store = makeStore();
    const state = store.getState();

    store.dispatch(decrement());

    const nextState = store.getState();

    expect(nextState).to.eql({
      counter: -1
    });
  });
});