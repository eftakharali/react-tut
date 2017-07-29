var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
const Weather = require('Weather');
const About  = require('About');
const Examples = require('Examples');

// foundation 
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>

    </Route>
  </Router>,
  document.getElementById('app')
);

