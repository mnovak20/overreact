'use strict';

import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const Counter = React.createClass({
  mixin: [PureRenderMixin],

  render: function() {
    const { counter, increment, decrement, incrementIfOdd, incrementAsync } = this.props;
    return <section className="container">
        <div className="row">
          <div className="column counter">
            <p>
              Counter {counter}
            </p>

            <div className="mb5">
              <button ref='increment'
                      onClick={increment}>+</button>
              {' '}
              <button ref='decrement'
                      onClick={decrement}>-</button>
            </div>
            <div className="mb5">
              <button className="button" ref="incrementIfOdd"
                      onClick={incrementIfOdd}>
                Increment if Odd
              </button>
            </div>
            <div className="mb5">
              <button className="button"
                      ref="incrementAsync"
                      onClick={() => {
                        incrementAsync(2000);
                      }}>
                Increment Async
              </button>
            </div>
          </div>
        </div>
      </section>;
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

