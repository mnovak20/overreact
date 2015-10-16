'use strict';

import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import AddItem from './AddItem/AddItem';
import ItemsList from './ItemsList/ItemsList';

const Items = React.createClass({
  mixin: [PureRenderMixin],

  render: function() {
    return <div>
      <AddItem {...this.props}/>
      <ItemsList {...this.props}/>
    </div>;
  }
});

if (process.env.NODE_ENV !== 'test') {
  require('./Items.css');

  Items.propTypes = {
    items: PropTypes.array.isRequired,
    toggleCompleteItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
  };
}

export default Items;

