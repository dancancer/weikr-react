require('../css/app.scss');
require('lie/dist/lie.polyfill.min');
require('regenerator/runtime');
var React = require('react');
var ReactDom = require('react-dom');

var Main = require('./main');

ReactDom.render(<Main />, document.getElementById("react-wrap"))
