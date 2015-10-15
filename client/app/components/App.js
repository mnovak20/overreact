//'use strict';
//
//import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';
//import Counter from './Counter/Counter';
//import * as CounterActions from '../actions/counter/counter';
//import { increment, decrement, incrementAsync, incrementIfOdd } from '../actions/counter/counter';
//
//function mapStateToProps(state) {
//  return {
//    counter: state.counter
//  };
//}
//
//function mapDispatchToProps(dispatch) {
//  return {
//    increment: function() {
//      dispatch(increment());
//    },
//    decrement: function() {
//      dispatch(decrement());
//    },
//    incrementAsync: function(delay) {
//      dispatch(incrementAsync(delay));
//    },
//    incrementIfOdd: function() {
//      dispatch(incrementIfOdd());
//    }
//  };
//}
//
///**
// * Equivalent to above
// * function mapDispatchToProps(dispatch) {;
// *  return bindActionCreators(CounterActions, dispatch);
// * }
// */
//
//export default connect(mapStateToProps, mapDispatchToProps)(Counter);