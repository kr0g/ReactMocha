// Mocking window and document object:
require('./dom-mock')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var assert = require('assert');
var React = require('react');
var TestUtils = require('react-addons-test-utils');

describe('Testing my div', () => {
  jsdom({ skipWindowCheck: true });

  var VeryFirstDiv;

  beforeEach(() => {
    VeryFirstDiv = require('../components/component.jsx');
  })

  it('should contain text: Lovely! Here it is - my very first React component!', () => {
    var myDiv = TestUtils.renderIntoDocument(<VeryFirstDiv />);
    var divText = TestUtils.findRenderedDOMComponentWithTag(myDiv, 'span');

    assert.equal(divText.textContent, 'Lovely! Here it is - my very first React component!');
  });
});
