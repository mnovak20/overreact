'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FilterActions from '../actions/filter/filter';
import { setVisibilityFilter } from '../actions/filter/filter';
import * as ItemsActions from '../actions/items/items';
import { addItem, toggleCompleteItem, removeItem, fetchItems } from '../actions/items/items';
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
    addItem: function(text) {
      dispatch(addItem(text));
    },
    toggleCompleteItem: function(item) {
      dispatch(toggleCompleteItem(item));
    },
    removeItem: function(text) {
      dispatch(removeItem(text));
    },
    fetchItems: function() {
      dispatch(fetchItems());
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