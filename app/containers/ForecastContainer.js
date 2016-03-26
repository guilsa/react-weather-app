var React = require('react');
var Results = require('../components/Results');

var ForecastContainer = React.createClass({
  getInitialState: function(){
    return {
      isLoading: true
    }
  },
  render: function () {
    return (
      <div>
        <Results
          isLoading={this.state.isLoading}/>
      </div>
    )
  }
})

module.exports = ForecastContainer;
