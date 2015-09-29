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

  it('invokes the incrementIfOdd callback when Increment if Odd button is clicked', () => {
    let incrementIfOddInvoked = false;
    const incrementIfOdd = () => incrementIfOddInvoked = true;
    const component = renderIntoDocument(
      <Counter incrementIfOdd={incrementIfOdd} />
    );

    Simulate.click(React.findDOMNode(component.refs.incrementIfOdd));
    expect(incrementIfOddInvoked).to.equal(true);
  });

  it('invokes the incrementAsync callback when Increment Async button is clicked', () => {
    let incrementAsyncInvoked = false;
    const incrementAsync = () => incrementAsyncInvoked = true;
    const component = renderIntoDocument(
      <Counter incrementAsync={incrementAsync} />
    );

    Simulate.click(React.findDOMNode(component.refs.incrementAsync));
    expect(incrementAsyncInvoked).to.equal(true);
  });
});