// On our example Github Battle ex app MainContainer is loaded here
// I think on that case it just served as a jumbotron component
// where multiple routes and components rendered inside of it

var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('../components/Loading');

function Forecast (props) {
 if (props.isLoading === true) {
   return (
     <Loading speed={100} text="One Moment" />
   )
 }
  return (
    <div>
      <h1>{props.city}</h1>
    </div>
  )
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = Forecast;
