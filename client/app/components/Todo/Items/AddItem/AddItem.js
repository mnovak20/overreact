'use strict';

import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const AddItem = React.createClass({
  mixin: [PureRenderMixin],

  render: function() {
    const { addItem } = this.props;
    return <div>
      <input type="text" ref="item" onKeyDown={(e) => {
        if (e.keyCode === 13) {
          addItem(this.refs.item.value);
        }
      }}/>
      <button ref="addItem" onClick={() => {
        addItem(this.refs.item.value);
      }}>Add Item</button>
    </div>;
  }
});

if (process.env.NODE_ENV !== 'test') {
  require('./AddItem.css');

  AddItem.propTypes = {
    addItem: PropTypes.func.isRequired
  };
}

export default AddItem;

