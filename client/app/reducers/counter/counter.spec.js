'use strict';

import { expect } from 'chai';
import { INCREMENT, DECREMENT } from '../../constants/counter';
import counter from './counter';

describe('Counter Reducer', () => {
  it('should handle initial state', () => {
    expect(counter(undefined, {})).to.eql(0);
  });

  it('should increment', () => {
    const state = 0;

    const nextState = counter(state, {
      type: INCREMENT
    });

    expect(nextState).to.eql(1);
  });

  it('should decrement', () => {
    const state = 0;

    const nextState = counter(state, {
      type: DECREMENT
    });

    expect(nextState).to.eql(-1);
  });
});