function convertTemp (kelvin) {
  return (kelvin - 273.15)* 1.8000 + 32.00
}

Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};

function getDate (n = 0) {
  var currentDate = new Date();
  return n === 0 ? currentDate : currentDate.addDays(n);
}

function formatGetDate(n = 0) {
  var currentDateToString = getDate(n).toString();
  var stringRegex = /^(.*? ){3}/;
  var currentDate = currentDateToString.match(stringRegex)[0];
  return currentDate.slice(0, currentDate.length - 1)
}

module.exports = {
  convertTemp: convertTemp,
  getDate: formatGetDate(n = 0)
}
