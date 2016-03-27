var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('../components/Loading');
var Day = require('./Day');

var styles = {
  header: {
    paddingTop: 20,
    fontSize: 55,
    fontWeight: 100,
  },
  title: {
    paddingTop: 20,
    paddingBottom: 5,
    fontSize: 30,
    fontWeight: 100,
  },
  dayContainer: {
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 50,
    paddingRight: 50,
  }
}

function Forecast (props) {
 if (props.isLoading === true) {
   return (
     <Loading speed={100} text="One Moment" />
   )
 }
  return (
    <div>
      <h1 className="text-center" style={styles.header}>{props.forecast.data.city.name}</h1>
      <h1 className="text-center" style={styles.title}>Select a day</h1>
      <div style={styles.dayContainer}>
        {
          props.forecast.data.list.map(function(item, index){
            return (
              <Day key={index} weather={item} />
            );
          })
        }
      </div>
    </div>
  )
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecast: PropTypes.object.isRequired
}

module.exports = Forecast;
