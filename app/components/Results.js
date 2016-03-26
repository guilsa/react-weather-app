var React = require('react');
var Loading = require('../components/Loading');

function Results (props) {
 if (props.isLoading === true) {
   return (
     <Loading speed={100} text="One Moment" />
   )
 }
  return (
    <div>
      <h1>not loading</h1>
    </div>
  )
}

module.exports = Results;
