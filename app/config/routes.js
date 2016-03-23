var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Nav = require('../components/Nav');

var routes = (
  <Router>
    <Route path="/" component={Nav}>
    </Route>
  </Router>
);

module.exports = routes;
