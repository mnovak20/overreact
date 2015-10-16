'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } from 'react-addons-test-utils';
import { expect } from 'chai';
import AddItem from './AddItem';

describe('AddItem Component', () => {
  it('renders the input box and button', () => {
    const component = renderIntoDocument(
      <AddItem />
    );

    const input = scryRenderedDOMComponentsWithTag(component, 'input');
    expect(input.length).to.eql(1);

    const button = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(button.length).to.eql(1);
  });

  it('invokes the addItem callback when button is clicked', () => {
    let addItemInvoked = false;
    const addItem = () => addItemInvoked = true;

    const component = renderIntoDocument(
      <AddItem addItem={addItem} />
    );

    console.log(ReactDOM.findDOMNode(component, 'button'))
    Simulate.click(ReactDOM.findDOMNode(component, 'button'));
    expect(addItemInvoked).to.equal(true);
  });
});