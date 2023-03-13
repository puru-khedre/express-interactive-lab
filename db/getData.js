const db = require("./data.json");

function getFullData() {
  return db;
}

function getDataById(id) {
  if (db.length - 1 >= id && id >= 0) {
    return db[id];
  } else return null;
}

module.exports = { getFullData, getDataById };
