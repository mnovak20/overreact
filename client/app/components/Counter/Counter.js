'use strict';

import React, { PropTypes } from 'react/addons';
import { RaisedButton } from 'material-ui';
import {TransitionMotion, spring} from 'react-motion';

const Counter = React.createClass({
 mixin: [React.addons.PureRenderMixin],

  getInitialState() {
    return {mouse: [], now: 't' + 0};
  },

  handleMouseMove({pageX, pageY}) {
    //make sure the state is queued and not batched.
    this.setProps(() => {
      return {
        mouse: [pageX - 25, pageY - 25],
        now: 't' + Date.now()
      }
    });
  },

  handleTouchMove(e) {
    e.preventDefault();
    this.handleMouseMove(e.touches[0]);
  },

  willLeave(key, valOfKey) {
    return {
      ...valOfKey,
      opacity: spring(0, [60, 15]),
      scale: spring(2, [60, 15]),
    };
  },

  render: function() {
    const { mouse:[mouseX, mouseY], now, counter, increment, decrement, incrementIfOdd, incrementAsync } = this.props;

    const styles = mouseX == null ? {} : {
      [now]: {
        opacity: spring(1),
        scale: spring(0),
        x: spring(mouseX),
        y: spring(mouseY),
      },
    };

    return <TransitionMotion willLeave={this.willLeave} styles={styles}>
              <section className="container-counter">
                {circles =>
                   <div
                     onMouseMove={this.handleMouseMove}
                     onTouchMove={this.handleTouchMove}
                     className="demo7">
                     {Object.keys(circles).map(key => {
                       const {opacity, scale, x, y} = circles[key];
                       return (
                         <div
                           key={key}
                           className="demo7-ball"
                           style={{
                             opacity: opacity,
                             scale: scale,
                             transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                             WebkitTransform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                         }} />
                       );
                     })}
                   </div>
                 }
              </section>
            </TransitionMotion>;
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
  
  // <div className="counter">
  //   <div className="screen">
  //     <p>
  //       Counter {counter}
  //     </p>
  //   </div>
  //   <div className="body">
  //     <div className="mb5">
  //       <RaisedButton ref='increment'
  //                     onClick={increment}>+</RaisedButton>
  //       {' '}
  //       <RaisedButton ref='decrement'
  //                     onClick={decrement}>-</RaisedButton>
  //     </div>
  //     <div className="mb5">
  //       <button className="button" ref="incrementIfOdd"
  //               onClick={incrementIfOdd}>
  //         Increment if Odd
  //       </button>
  //     </div>
  //     <div className="mb5">
  //       <button className="button"
  //               ref="incrementAsync"
  //               onClick={incrementAsync}>
  //         Increment Async
  //       </button>
  //     </div>
  //   </div>
  // </div>
