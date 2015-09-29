'use strict';

import { COMPLETE_TODO, ADD_TODO } from '../../constants/todo';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text: text
  };
}

export function completeTodo(state = 0) {
  return {
    type: COMPLETE_TODO,
    index: 0
  };
}