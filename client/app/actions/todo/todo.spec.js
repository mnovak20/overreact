'use strict';

import { expect} from 'chai';
import { completeTodo, addTodo } from './todo';
import { COMPLETE_TODO, ADD_TODO } from '../../constants/todo';

describe('Todo', () => {
  it('should create an add todo action', () => {
    expect(addTodo('Making eggs')).to.eql({
      type: ADD_TODO,
      text: 'Making eggs'
    });
  });

  it('should create a complete todo action', () => {
    expect(completeTodo(0)).to.eql({
      type: COMPLETE_TODO,
      index: 0
    });
  });
});