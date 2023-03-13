const db = require("./db");
/*
 * // Calling getFllData() to get all data from database
 * const data = db.getFullData();
 *
 * // Calling saveData() to save the data in fake Database
 * db.saveData(data);
 */

const express = require("express");
const app = express();

app.get("/", (rq, rs) => {
  rs.sendFile(__dirname + "/index.html");
});

app.listen(1337, () => {
  console.log("Server started succefully");
});
