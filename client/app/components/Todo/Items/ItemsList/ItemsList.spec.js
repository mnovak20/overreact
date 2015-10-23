'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } from 'react-addons-test-utils';
import { expect, spy } from 'chai';
import ItemsList from './ItemsList';

describe('ItemsList Component', () => {
  it('renders the item lists with checkbox and button', () => {
    const items = [{
      text: 'Make Eggs',
      completed: false
    }, {
      text: 'Buy Milk',
      completed: false
    }];

    const component = renderIntoDocument(
      <ItemsList items={items}/>
    );

    const li = scryRenderedDOMComponentsWithTag(component, 'li');
    expect(li.length).to.eql(2);

    const button = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(button.length).to.eql(2);

    const input = scryRenderedDOMComponentsWithTag(component, 'input');
    expect(input.length).to.eql(2);
  });

  it('renders the checkbox checked if item is completed', () => {
    const items = [{
      text: 'Make Eggs',
      completed: false
    }, {
      text: 'Buy Milk',
      completed: true
    }];

    const component = renderIntoDocument(
      <ItemsList items={items}/>
    );

    const incompleteCheckBox = ReactDOM.findDOMNode(component.refs['input-0']);
    const completeCheckBox = ReactDOM.findDOMNode(component.refs['input-1']);

    expect(incompleteCheckBox.checked).to.equal(false);
    expect(completeCheckBox.checked).to.equal(true);
  });

  it('invokes the updatingItem callback when checkbox is checked', () => {
    const updatingItem = spy();

    const items = [{
      text: 'Make Eggs',
      completed: false
    }];

    const component = renderIntoDocument(
      <ItemsList items={items} updatingItem={updatingItem} />
    );

    Simulate.change(ReactDOM.findDOMNode(component.refs['input-0']), { "target" : { "checked": true } });
    expect(updatingItem).to.have.been.called.with({
      text: 'Make Eggs',
      completed: false
    });
  });

  it('invokes the removingItem callback when button is clicked', () => {
    const removingItem = spy();

    const items = [{
      text: 'Make Eggs',
      completed: false
    }];

    const component = renderIntoDocument(
      <ItemsList items={items} removingItem={removingItem} />
    );

    Simulate.click(ReactDOM.findDOMNode(component.refs['button-0']));
    expect(removingItem).to.have.been.called.with({
      text: 'Make Eggs',
      completed: false
    });
  });
});