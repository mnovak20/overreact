'use strict';

import { COMPLETE_TODO, ADD_TODO } from '../../constants/todo';

export default function todo(state = [], action) {
 switch (action.type) {
   case ADD_TODO:
     return [
       ...state, {
         text: action.text,
         completed: false
       }
     ];

   case COMPLETE_TODO:
     return [
       ...state.slice(0, action.index),
       Object.assign({}, state[action.index], {
         completed: true
       }),
       ...state.slice(action.index + 1)
     ];

   default:
     return state;
 }
}