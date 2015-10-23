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

  it('should not invoke the callback if the input box is empty when button is clicked', () => {
    const addingItem = spy();

    const component = renderIntoDocument(
      <AddItem addingItem={addingItem} />
    );

    Simulate.click(ReactDOM.findDOMNode(component.refs.addingItem));
    expect(addingItem).to.not.have.been.called.with({ text: 'Make Eggs' });
  });

  it('should not invoke the callback if the input box is empty when enter is pressed', () => {
    const addingItem = spy();

    const component = renderIntoDocument(
      <AddItem addingItem={addingItem} />
    );

    Simulate.keyDown(ReactDOM.findDOMNode(component.refs.item), { keyCode: 13 });
    expect(addingItem).to.not.have.been.called.with({ text: 'Make Eggs' });
  });

  it('invokes the addingItem callback when button is clicked', () => {
    const addingItem = spy();

    const component = renderIntoDocument(
      <AddItem addingItem={addingItem} />
    );

    component.refs.item.value = 'Make Eggs';
    Simulate.click(ReactDOM.findDOMNode(component.refs.addingItem));
    expect(addingItem).to.have.been.called.with({ text: 'Make Eggs' });
  });

  it('invokes the addingItem callback when an enter keyboard is pressed', () => {
    const addingItem = spy();

    const component = renderIntoDocument(
      <AddItem addingItem={addingItem} />
    );

    component.refs.item.value = 'Make Eggs';
    Simulate.keyDown(ReactDOM.findDOMNode(component.refs.item), { keyCode: 13 });
    expect(addingItem).to.have.been.called.with({ text: 'Make Eggs' });
  });

  it('reset the input box field after enter', () => {
    const addingItem = spy();

    const component = renderIntoDocument(
      <AddItem addingItem={addingItem}/>
    );

    component.refs.item.value = 'Make Eggs';
    Simulate.keyDown(ReactDOM.findDOMNode(component.refs.item), { keyCode: 13 });
    expect(component.refs.item.value).to.equal('');
  });

  it('reset the input box field after add item button is clicked', () => {
    const addingItem = spy();

    const component = renderIntoDocument(
      <AddItem addingItem={addingItem} />
    );

    component.refs.item.value = 'Make Eggs';
    Simulate.click(ReactDOM.findDOMNode(component.refs.addingItem));
    expect(component.refs.item.value).to.equal('');
  });
});