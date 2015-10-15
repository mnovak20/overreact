'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } from 'react-addons-test-utils';
import { expect } from 'chai';
import Filter from './Filter';
import { SHOW_ALL, SHOW_COMPLETED } from '../../constants/filter';


describe('Filter Component', () => {
  it('renders the filter', () => {
    const component = renderIntoDocument(
      <Filter />
    );

    const options = scryRenderedDOMComponentsWithTag(component, 'option');
    expect(options.length).to.eql(2);

    expect(options[0].value).to.eql(SHOW_ALL);
    expect(options[1].value).to.eql(SHOW_COMPLETED);
  });

  it('invokes the setVisibilityFilter callback when the select is changed', () => {
    let selectFilterInvoked = false;
    const setVisibilityFilter = () => selectFilterInvoked = true;
    const component = renderIntoDocument(
      <Filter setVisibilityFilter={setVisibilityFilter} />
    );

    Simulate.change(ReactDOM.findDOMNode(component));
    expect(selectFilterInvoked).to.equal(true);
  });
});