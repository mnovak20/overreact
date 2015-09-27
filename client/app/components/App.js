'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from './Counter';
import * as CounterActions from '../actions';
import { increment, decrement } from '../actions';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: function() {
      dispatch(increment())
    },
    decrement: function() {
      dispatch(decrement())
    }
  };
}

// equivalent above
//function mapDispatchToProps(dispatch) {
//  console.log(bindActionCreators(CounterActions, dispatch));
//  return bindActionCreators(CounterActions, dispatch);
//}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);