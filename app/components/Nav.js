var React = require('react');

var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h1>hello from Nav</h1>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Nav;
