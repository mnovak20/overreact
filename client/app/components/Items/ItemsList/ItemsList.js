'use strict';

import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const ItemsList = React.createClass({
  mixin: [PureRenderMixin],

  render: function() {
    const { items, removeItem, completeItem } = this.props;
    return <ul>
      {items.map((item) => {
        return <li>
          {item.text} <input type="checkbox" name="item" onChange={completeItem.bind(item)}/><br />
          <button onClick={removeItem.bind(item)}>Remove</button>
        </li>;
      })}
    </ul>;
  }
});

if (process.env.NODE_ENV !== 'test') {
  require('./ItemsList.css');

  ItemsList.propTypes = {
    completeItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
  };
}

export default ItemsList;

