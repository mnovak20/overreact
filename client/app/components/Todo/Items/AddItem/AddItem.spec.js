'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } from 'react-addons-test-utils';
import { expect, spy } from 'chai';
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
    const addItem = spy();

    const component = renderIntoDocument(
      <AddItem addItem={addItem} />
    );

    component.refs.item.value = 'Make Eggs';
    Simulate.click(ReactDOM.findDOMNode(component.refs.addItem));
    expect(addItem).to.have.been.called.with('Make Eggs');
  });

  it('invokes the addItem callback when an enter keyboard is pressed', () => {
    const addItem = spy();

    const component = renderIntoDocument(
      <AddItem addItem={addItem} />
    );

    component.refs.item.value = 'Make Eggs';
    Simulate.keyDown(ReactDOM.findDOMNode(component.refs.item), { keyCode: 13 });
    expect(addItem).to.have.been.called.with('Make Eggs');
  });

  it('reset the input box field after enter');

  it('reset the input box field after add item button is clicked');
});