'use strict';

import React from 'react/addons';
import { expect } from 'chai';
import Counter from './Counter';

const { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } = React.addons.TestUtils;

describe('Counter', () => {
  it('renders the counter', () => {
    const component = renderIntoDocument(
      <Counter counter={0}/>
    );

    const counter = scryRenderedDOMComponentsWithTag(component, 'p');

    expect(counter[0].getDOMNode().textContent).to.contain(0);
  });

  it('invokes the increment callback when + button is clicked', () => {
    let incrementInvoked = false;
    const increment = () => incrementInvoked = true;
    const component = renderIntoDocument(
      <Counter increment={increment} />
    );

    Simulate.click(React.findDOMNode(component.refs.increment));
    expect(incrementInvoked).to.equal(true);
  });

  it('invokes the decrement callback when + button is clicked', () => {
    let decrementInvoked = false;
    const decrement = () => decrementInvoked = true;
    const component = renderIntoDocument(
      <Counter decrement={decrement} />
    );

    Simulate.click(React.findDOMNode(component.refs.decrement));
    expect(decrementInvoked).to.equal(true);
  });
});