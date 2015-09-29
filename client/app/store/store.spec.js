'use strict';

import { expect } from 'chai';
import makeStore from './store';
import { setVisibilityFilter } from '../actions/filter/filter';
import { addTodo, completeTodo } from '../actions/todo/todo';
import { SHOW_ALL, SHOW_COMPLETED } from '../constants/filter';

describe('Store', () => {
  let store, state;

  beforeEach(() => {
    store = makeStore();
    state = store.getState();
  });

  it('should start with an initial state', () => {
    expect(state).to.eql({
      filter: SHOW_ALL,
      todo: []
    });
  });

  it('should set a filter', () => {
    store.dispatch(setVisibilityFilter(SHOW_COMPLETED));
    const nextState = store.getState();

    expect(nextState).to.eql({
      filter: SHOW_COMPLETED,
      todo: []
    });
  });

  it('should add a todo', () => {
    store.dispatch(addTodo('Making eggs'));
    const nextState = store.getState();

    expect(nextState).to.eql({
      filter: SHOW_ALL,
      todo: [{
        text: 'Making eggs',
        completed: false
      }]
    });
  });

  it('should complete a todo', () => {
    store.dispatch(addTodo('Making eggs'));
    store.dispatch(completeTodo(0));
    const nextState = store.getState();

    expect(nextState).to.eql({
      filter: SHOW_ALL,
      todo: [{
        text: 'Making eggs',
        completed: true
      }]
    });
  });
});