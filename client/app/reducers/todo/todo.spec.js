'use strict';

import { expect } from 'chai';
import { COMPLETE_TODO, ADD_TODO } from '../../constants/todo';
import todo from './todo';

describe('Todo Reducer', () => {
  it('should add a todo', () => {
    const state = [];

    const nextState = todo(state, {
      type: ADD_TODO,
      text: 'Making eggs'
    });

    expect(nextState).to.eql([{
      text: 'Making eggs',
      completed: false
    }]);
  });

  it('should complete a todo', () => {
    const state = [{
      text: 'Making eggs',
      completed: false
    }];

    const nextState = todo(state, {
      type: COMPLETE_TODO,
      index: 0
    });

    expect(nextState).to.eql([{
      text: 'Making eggs',
      completed: true
    }]);
  });
});