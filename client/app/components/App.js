'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from './Counter/Counter';
import * as CounterActions from '../actions/counter/counter';
import { increment, decrement } from '../actions/counter/counter';

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

/**
 * Equivalent to above
 * function mapDispatchToProps(dispatch) {;
 *  return bindActionCreators(CounterActions, dispatch);
 * }
 */

export default connect(mapStateToProps, mapDispatchToProps)(Counter);