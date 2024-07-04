const generateUniqueID = (count) => {
  var newId = String(count + 1).padStart(5, "0");
  return newId;
};

module.exports = generateUniqueID;
