// On our example Github Battle ex app MainContainer is loaded here
// I think on that case it just served as a jumbotron component
// where multiple routes and components rendered inside of it
// In this case we will use ResultsContainer

var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('../components/Loading');

function Results (props) {
 if (props.isLoading === true) {
   return (
     <Loading speed={100} text="One Moment" />
   )
 }
  return (
    <div>
      <h1>done loading</h1>
    </div>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

module.exports = Results;
