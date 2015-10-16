'use strict';

import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const AddItem = React.createClass({
  mixin: [PureRenderMixin],

  render: function() {
    const { addItem } = this.props;
    return <div>
      <input type="text" onKeyPress={(e) => {
        if (e.keyCode === 13) {
          addItem(this.value);
        }
      }}/>
      <button onClick={addItem}>Add Item</button>
    </div>;
  }
});

if (process.env.NODE_ENV !== 'test') {
  require('./AddItem.css');

  Filter.propTypes = {
    addItem: PropTypes.func.isRequired,
    completeItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
  };
}

export default AddItem;

