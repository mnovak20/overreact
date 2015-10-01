'use strict';

import React, { PropTypes } from 'react/addons';
import { RaisedButton } from 'material-ui';
import {TransitionMotion, Motion, Spring, spring} from 'react-motion';

const Counter = React.createClass({
 mixin: [React.addons.PureRenderMixin],

  render: function() {
    const { counter, increment, decrement, incrementIfOdd, incrementAsync } = this.props;

    return <Motion
            defaultStyle={{x: 0}}
            style={{x: spring(90, [120, 17])}}>
            {style => <div style={{left: style.x}} className="box" />}
          </Motion>;
    }
});

if (process.env.NODE_ENV !== 'test') {
  require('./Counter.css');

  Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired
  };
}

export default Counter;

// <section className="container-counter">
//   <div className="counter">
//     <div className="screen">
//       <p>
//         Counter {counter}
//       </p>
//     </div>
//     <div className="body">
//       <div className="mb5">
//         <RaisedButton ref='increment'
//                       onClick={increment}>+</RaisedButton>
//         {' '}
//         <RaisedButton ref='decrement'
//                       onClick={decrement}>-</RaisedButton>
//       </div>
//       <div className="mb5">
//         <button className="button" ref="incrementIfOdd"
//                 onClick={incrementIfOdd}>
//           Increment if Odd
//         </button>
//       </div>
//       <div className="mb5">
//         <button className="button"
//                 ref="incrementAsync"
//                 onClick={incrementAsync}>
//           Increment Async
//         </button>
//       </div>
//     </div>
//   </div>
// </section>
