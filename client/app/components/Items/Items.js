'use strict';

import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const Items = React.createClass({
  mixin: [PureRenderMixin],

  render: function() {
    const { addItem, completeItem, removeItem } = this.props;
    return <div>

    </div>;
  }
});

if (process.env.NODE_ENV !== 'test') {
  require('./Items.css');

  Filter.propTypes = {
    addItem: PropTypes.func.isRequired,
    completeItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
  };
}

export default Items;

