var React = require('react');
var PropTypes = React.PropTypes;
var utils = require('../utils/utils');

styles = {
  container: {
    paddingLeft: 100,
    paddingRight: 100,
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  box: {
    width: 207,
    height: 193,
    minWidth: 207,
    backgroundColor: "green",
    margin: 30,
    display:'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignContent: 'flex-start',
    alignItems: 'center',
  },
  body: {
    paddingTop: 10,
    fontSize: 29,
    fontWeight: 100,
  },
  image: {
    width: 128,
    height: 130,
    backgroundColor: 'red'
  }
}

// function getImage (props) {
//   return {
//
//   }
// }

function Day (props) {
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.box}>
          <img style={styles.image} src="app/images/weather-icons/01d.svg"/>
          <div style={styles.body}>
            {props.weather}
          </div>
        </div>
      </div>
    </div>
  )
}

Day.propTypes = {
  weather: PropTypes.string.isRequired,
}

module.exports = Day;
