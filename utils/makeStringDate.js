const makeStringData = (addExtraDay) => {
  var date = new Date();
  var newDate = new Date(date);
  newDate.setDate(date.getDate() + addExtraDay);

  var day = String(newDate.getDate()).padStart(2, "0");
  var month = String(newDate.getMonth() + 1).padStart(2, "0");
  var year = newDate.getFullYear();

  return `${day}-${month}-${year}`;
};

module.exports = makeStringData;
