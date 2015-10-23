'use strict';

import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const ItemsList = React.createClass({
  mixin: [PureRenderMixin],

  handleUpdate: function(item) {
    item.completed = !item.completed;
    this.props.updatingItem(item);
  },

  render: function() {
    const { items, removingItem } = this.props;
    return <ul>
      {items.map((item, i) => {
        return <li className="item" key={i}>
          <div className="text">{item.text}</div>

          <input className="checkbox"
                 ref={'input-' + i}
                 type="checkbox"
                 checked={item.completed}
                 onChange={this.handleUpdate.bind(null, item)}/>

          <button className="button"
                  ref={'button-' + i}
                  onClick={() => {
                    removingItem(item);
                  }}>x</button>
        </li>;
      })}
    </ul>;
  }
});

if (process.env.NODE_ENV !== 'test') {
  require('./ItemsList.css');

  ItemsList.propTypes = {
    updatingItem: PropTypes.func.isRequired,
    removingItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
  };
}

export default ItemsList;

