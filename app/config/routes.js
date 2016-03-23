var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Nav = require('../components/Nav');
var Home = require('../components/Home');

var routes = (
  <Router>
    <Route path="/" component={Nav}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

module.exports = routes;
