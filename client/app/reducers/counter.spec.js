'use strict';

import { expect } from 'chai';

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions';
import counter from './counter';

describe('Counter', () => {
  it('should increment', () => {
    const state = 0;

    const nextState = counter(state, {
      type: INCREMENT_COUNTER
    });

    expect(nextState).to.equal(1);
  });

  it('should decrement', () => {
    const state = 0;

    const nextState = counter(state, {
      type: DECREMENT_COUNTER
    });

    expect(nextState).to.equal(-1);
  });
});