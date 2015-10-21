'use strict';

import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Filter from './Filter/Filter';
import Items from './Items/Items';
import { SHOW_ALL, SHOW_COMPLETED } from '../../constants/filter';

const Todo = React.createClass({
  mixin: [PureRenderMixin],

  componentDidMount: function() {
    console.log("testting")
  },

  render: function() {
    const items = this.props.items.filter((item) => {
      if (this.props.filter === SHOW_COMPLETED) {
        return item.completed;
      }

      return true;
    });
    return <div className="container">
        <div className="column">
          <div className="todo">
            <h1>Todo</h1>
            <Filter {...this.props}/>
            <Items {...this.props} items={items}/>
          </div>
        </div>
      </div>
  }
});

if (process.env.NODE_ENV !== 'test') {
  require('./Todo.css');

  Todo.propTypes = {
    filter: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
    toggleCompleteItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
  };
}

export default Todo;

