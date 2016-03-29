var React = require('react');
var CityDetails = require('../components/CityDetails');

var CityDetailsContainer = React.createClass({
  render: function () {
    return (
      <div>
        <CityDetails weather={this.props.location.state.weather} />
      </div>
    )
  }
});

module.exports = CityDetailsContainer;
