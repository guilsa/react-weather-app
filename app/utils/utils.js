function convertTemp (kelvin) {
  return (kelvin - 273.15)* 1.8000 + 32.00
}

// http://stackoverflow.com/questions/3818193/how-to-add-number-of-days-to-todays-date
Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};

function getDate (n = 0) {
  var currentDate = new Date();
  return n === 0 ? currentDate : currentDate.addDays(n);
}

function formatGetDate(n = 0) {
  var getFullDate = getDate(n).toString();
  var getWeekMonthDayRegex = /^(.*? ){3}/; //http://stackoverflow.com/questions/17004741/regex-how-to-delete-everything-before-the-third-empty-space-in-a-notepad-lin#17004755
  var currentDate = getFullDate.match(getWeekMonthDayRegex)[0].trim();
  return currentDate;
}

module.exports = {
  convertTemp: convertTemp,
  getDate: formatGetDate(n = 0)
}
