var React = require('react');
var GetWeather = require('../components/GetWeather');
var PropTypes = React.PropTypes;
var openWeatherHelpers = require('../utils/openWeatherHelpers');

var GetWeatherContainer = React.createClass({
  getDefaultProps: function(){
    return {
      direction: 'column'
    }
  },
  propTypes: {
    direction: PropTypes.string
  },
  getInitialState: function(){
    return {
      location: 'Winston-Salem, NC'
    }
  },
  handleSubmitLocation: function(){
    openWeatherHelpers.getCurrentWeather(this.state.location)
      .then(function(weather){
        console.log(weather);
        debugger
      })
  },
  handleUpdateLocation: function(e) {
    console.log("handleUpdateLocation");
    this.setState({
      location: e.target.value
    });
  },
  render: function () {
    return (
      <GetWeather
        location={this.state.location}
        direction={this.props.direction}
        onSubmitLocation={this.handleSubmitLocation}
        onUpdateLocation={this.handleUpdateLocation}/>
    )
  }
})

// GetWeather.propTypes = {
//   direction: PropTypes.string,
// }

module.exports = GetWeatherContainer;
