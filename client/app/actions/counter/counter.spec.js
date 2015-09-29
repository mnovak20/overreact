'use strict';

import chai, { expect } from 'chai';
import { increment, decrement, incrementIfOdd, incrementAsync } from './counter';
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

  it('should create increment action if counter is odd', () => {
    const fn = incrementIfOdd();
    expect(fn).to.be.a.function;
    const dispatch = chai.spy();
    const getState = () => ({ counter : 1 });
    fn(dispatch, getState);
    expect(dispatch).to.have.been.called.with({ type: INCREMENT });
  });

  it('should not create increment action if counter is even', () => {
    const fn = incrementIfOdd();
    expect(fn).to.be.a.function;
    const dispatch = chai.spy();
    const getState = () => ({ counter: 2 });
    fn(dispatch, getState);
    expect(dispatch).to.not.have.been.called();
  });

  it('should increment asynchronously', () => {
    const fn = incrementAsync();
    expect(fn).to.be.a.function;
    const dispatch = chai.spy();
    fn(dispatch);
    setTimeout(() => {
      expect(dispatch).to.have.been.called.with({ type: INCREMENT });
    }, 5);
  });
});