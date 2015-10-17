'use strict';

import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { SHOW_ALL, SHOW_COMPLETED } from '../../../constants/filter';

const Filter = React.createClass({
  mixin: [PureRenderMixin],

  render: function() {
    const { setVisibilityFilter } = this.props;
    return <select className="filter"
                   onChange={(e) => {
      setVisibilityFilter(e.target.value);
    }}>
      <option value={SHOW_ALL}>Show All</option>
      <option value={SHOW_COMPLETED}>Show Completed</option>
    </select>;
  }
});

if (process.env.NODE_ENV !== 'test') {
  require('./Filter.css');

  Filter.propTypes = {
    setVisibilityFilter: PropTypes.func.isRequired
  };
}

export default Filter;

