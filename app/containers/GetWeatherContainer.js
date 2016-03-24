var React = require('react');
var GetWeather = require('../components/GetWeather');

var GetWeatherContainer = React.createClass({
  getInitialState: function(){
    return {
      location: 'Winston-Salem, NC'
    }
  },
  handleSubmitLocation: function(e){
    e.preventDefault();
    debugger
  },
  handleUpdateLocation: function(e) {
    this.setState({
      location: e.target.value
    });
  },
  render: function () {
    return (
      <GetWeather
        location={this.state.location}
        onSubmitLocation={this.handleSubmitLocation}
        onUpdateLocation={this.handleUpdateLocation}/>
    )
  }
})

module.exports = GetWeatherContainer;
