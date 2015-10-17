'use strict';

import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const ItemsList = React.createClass({
  mixin: [PureRenderMixin],

  render: function() {
    const { items, removeItem, toggleCompleteItem } = this.props;
    return <ul>
      {items.map((item, i) => {
        return <li className="item" key={i}>
          <div className="text">{item.text}</div>

          <input className="checkbox"
                 ref={'input-' + i}
                 type="checkbox"
                 checked={item.completed}
                 onChange={() => {
                    toggleCompleteItem(item.text);
                 }}/>

          <button className="button"
                  ref={'button-' + i}
                  onClick={() => {
                    removeItem(item.text);
                  }}>x</button>
        </li>;
      })}
    </ul>;
  }
});

if (process.env.NODE_ENV !== 'test') {
  require('./ItemsList.css');

  ItemsList.propTypes = {
    toggleCompleteItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
  };
}

export default ItemsList;
