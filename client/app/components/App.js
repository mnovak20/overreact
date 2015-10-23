'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FilterActions from '../actions/filter/filter';
import { setVisibilityFilter } from '../actions/filter/filter';
import * as ItemsActions from '../actions/items/items';
import { addingItem, updatingItem, removingItem, receivingItems } from '../actions/items/items';
import Todo from './Todo/Todo';

function mapStateToProps(state) {
  return {
    filter: state.filter,
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setVisibilityFilter: function(filter) {
      dispatch(setVisibilityFilter(filter));
    },
    addingItem: function({ text }) {
      dispatch(addingItem({ text }));
    },
    updatingItem: function(item) {
      dispatch(updatingItem(item));
    },
    removingItem: function(item) {
      dispatch(removingItem(item));
    },
    receivingItems: function() {
      dispatch(receivingItems());
    }
  };
}

/**
 * Equivalent to above
 * function mapDispatchToProps(dispatch) {;
 *  return bindActionCreators(ItemsActions, dispatch);
 * }
 */

export default connect(mapStateToProps, mapDispatchToProps)(Todo);