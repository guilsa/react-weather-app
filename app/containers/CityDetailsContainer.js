var React = require('react');
var CityDetails = require('../components/CityDetails');
var openWeatherHelpers = require('../utils/openWeatherHelpers');

var CityDetailsContainer = React.createClass({
  getInitialState: function(){
    return {
      weather: ""
    }
  },
  componentDidMount: function(){
    this.setState({
      weather: this.props.location.state.weather
    })
  },
  render: function () {
    return (
      <CityDetails
        weather={this.state.weather}/>
    )
  }
});

module.exports = CityDetailsContainer;
