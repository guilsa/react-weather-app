var React = require('react');
var PropTypes = React.PropTypes;
var Day = require('./Day');

var styles = {
  header: {
    paddingTop: 10,
    fontSize: 29,
    fontWeight: 100,
  }
}

function CityDetails (props) {
  debugger
  return (
    <div>
      <Day weather={props.weather}></Day>
    </div>
  )
}

CityDetails.propTypes = {
  weather: PropTypes.object.isRequired,
}

module.exports = CityDetails;
