'use strict';

import { expect } from 'chai';
import { increment, decrement } from './counter';
import { INCREMENT, DECREMENT } from '../../constants/counter';

describe('Counter Action Creators', () => {
  it('should create an increment action', () => {
    expect(increment()).to.eql({
      type: INCREMENT
    });
  });

  it('should create a decrement action', () => {
    expect(decrement()).to.eql({
      type: DECREMENT
    });
  });
});