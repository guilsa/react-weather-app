// On our example Github Battle ex app MainContainer is loaded here
// I think on that case it just served as a jumbotron component
// where multiple routes and components rendered inside of it

var styles = {
  // container: {
  //   display: 'flex',
  //   alignItems: 'center',
  // },
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
  header: {
    paddingTop: 20,
    fontSize: 55,
    fontWeight: 100,
  },
  title: {
    paddingTop: 20,
    fontSize: 30,
    fontWeight: 100,
  },
  box: {
    width: 207,
    height: 193,
    minWidth: 207,
    backgroundColor: "green",
    margin: 30,
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
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
      <h1 className="text-center" style={styles.header}>{props.city}</h1>
      <h1 className="text-center" style={styles.title}>Select a day</h1>
      <div style={styles.container}>
        <div style={styles.box}>
          <div style={styles.image}></div>
          <div style={styles.body}>Saturday, Mar 26</div>
        </div>
        <div style={styles.box}>
          <div style={styles.image}></div>
          <div style={styles.body}>Saturday, Mar 26</div>
        </div>
        <div style={styles.box}>
          <div style={styles.image}></div>
          <div style={styles.body}>Saturday, Mar 26</div>
        </div>
        <div style={styles.box}>
          <div style={styles.image}></div>
          <div style={styles.body}>Saturday, Mar 26</div>
        </div>
        <div style={styles.box}>
          <div style={styles.image}></div>
          <div style={styles.body}>Saturday, Mar 26</div>
        </div>
      </div>
    </div>
  )
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = Forecast;
