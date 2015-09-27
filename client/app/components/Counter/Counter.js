'use strict';

import React, { PropTypes } from 'react/addons';

const Counter = React.createClass({
  mixin: [React.addons.PureRenderMixin],

  render: function() {
    const { counter, increment, decrement } = this.props;
    return <div>
        <p>
          Counter {counter}
        </p>
        <button ref='increment'
                onClick={increment}>+</button>
        <button ref='decrement'
                onClick={decrement}>-</button>
      </div>;
  }
});

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;

