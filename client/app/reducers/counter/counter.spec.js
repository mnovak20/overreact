'use strict';

import { expect } from 'chai';
import { INCREMENT, DECREMENT } from '../../constants/counter';
import counter from './counter';

describe('Counter Reducer', () => {
  it('should increment a state', () => {
    const state = 0;

    const nextState = counter(state, {
      type: INCREMENT
    });

    expect(nextState).to.equal(1);
  });

  it('should decrement a state', () => {
    const state = 0;

    const nextState = counter(state, {
      type: DECREMENT
    });

    expect(nextState).to.equal(-1);
  });
});