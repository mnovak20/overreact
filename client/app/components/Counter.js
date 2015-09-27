'use strict';

import React from 'react';

export default React.createClass({
  render: function() {
    return <div>
        <p>
          Counter {this.props.counter}
        </p>
        <button ref='increment'
                onClick={this.props.increment}>+</button>
        <button ref='decrement'
                onClick={this.props.decrement}>-</button>
      </div>;
  }
});