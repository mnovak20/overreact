'use strict';

import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const AddItem = React.createClass({
  mixin: [PureRenderMixin],

  handleSubmit: function() {
    if (this.refs.item.value) {
      this.props.addingItem({ text: this.refs.item.value });
      this.refs.item.value = '';
    }
  },

  render: function() {
    return <div>
      <input className="input"
             type="text"
             ref="item"
             onKeyDown={(e) => {
        if (e.keyCode === 13) {
          this.handleSubmit();
        }
      }}/>
      <button className="button"
              ref="addingItem"
              onClick={this.handleSubmit}>Add Item</button>
    </div>;
  }
});

if (process.env.NODE_ENV !== 'test') {
  require('./AddItem.css');

  AddItem.propTypes = {
    addingItem: PropTypes.func.isRequired
  };
}

export default AddItem;

