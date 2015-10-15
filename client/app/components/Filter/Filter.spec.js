'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } from 'react-addons-test-utils';
import { expect } from 'chai';
import Filter from './Filter';


describe('Filter Component', () => {
  it('renders the filter', () => {
    const component = renderIntoDocument(
      <Filter />
    );

    const options = scryRenderedDOMComponentsWithTag(component, 'option');
    expect(options.length).to.eql(2);

    const filter = scryRenderedDOMComponentsWithTag(component, 'select');

    console.log(filter.refs)
    //expect(counter[0].textContent).to.contain(0);
  });
//
//  it('invokes the increment callback when + button is clicked', () => {
//    let incrementInvoked = false;
//    const increment = () => incrementInvoked = true;
//    const component = renderIntoDocument(
//      <Filter increment={increment} />
//    );
//
//    Simulate.click(ReactDOM.findDOMNode(component.refs.increment));
//    expect(incrementInvoked).to.equal(true);
//  });
//
//  it('invokes the decrement callback when + button is clicked', () => {
//    let decrementInvoked = false;
//    const decrement = () => decrementInvoked = true;
//    const component = renderIntoDocument(
//      <Filter decrement={decrement} />
//    );
//
//    Simulate.click(ReactDOM.findDOMNode(component.refs.decrement));
//    expect(decrementInvoked).to.equal(true);
//  });
//
//  it('invokes the incrementIfOdd callback when Increment if Odd button is clicked', () => {
//    let incrementIfOddInvoked = false;
//    const incrementIfOdd = () => incrementIfOddInvoked = true;
//    const component = renderIntoDocument(
//      <Filter incrementIfOdd={incrementIfOdd} />
//    );
//
//    Simulate.click(ReactDOM.findDOMNode(component.refs.incrementIfOdd));
//    expect(incrementIfOddInvoked).to.equal(true);
//  });
//
//  it('invokes the incrementAsync callback when Increment Async button is clicked', () => {
//    let incrementAsyncInvoked = false;
//    const incrementAsync = () => incrementAsyncInvoked = true;
//    const component = renderIntoDocument(
//      <Filter incrementAsync={incrementAsync} />
//    );
//
//    Simulate.click(ReactDOM.findDOMNode(component.refs.incrementAsync));
//    expect(incrementAsyncInvoked).to.equal(true);
//  });
});