'use strict';

import { expect, spy } from 'chai';
import { INCREMENT, DECREMENT } from '../../constants/counter';
import { increment, decrement, incrementAsync, incrementIfOdd } from './counter';

describe('Counter Action Creator', () => {
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

  it('incrementIfOdd should create increment action', () => {
    const fn = incrementIfOdd();
    expect(fn).to.be.a.function;

    const dispatch = spy();
    const getState = () => ({ counter: 1 });

    fn(dispatch, getState);
    expect(dispatch).to.have.been.called.with({ type: INCREMENT });
  });

  // There is no nice way to test this at the moment
  it('incrementAsync should create an increment action', (done) => {
    const fn = incrementAsync(1);
    expect(fn).to.be.a.function;

    const dispatch = spy();
    fn(dispatch);

    setTimeout(() => {
      expect(dispatch).to.have.been.called.with({ type: INCREMENT });

      done();
    }, 5);
  });
});