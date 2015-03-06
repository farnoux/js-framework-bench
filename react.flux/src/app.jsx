'use strict';

var React = require('react');
window.React = React;

var Desk = require('./views/desk.jsx');

React.render(<Desk />, document.getElementById('content'));
