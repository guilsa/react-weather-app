var React = require('react');
var PropTypes = React.PropTypes;

function CityDetails (props) {
  console.log(props.weather);
  return (
    <div>
      DETAILS
    </div>
  )
}

CityDetails.propTypes = {
  weather: PropTypes.object.isRequired,
}

module.exports = CityDetails;
