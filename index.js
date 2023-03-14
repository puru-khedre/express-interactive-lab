const db = require("./db");
/*
 * // Calling getFullData() to get all data from database
 * const data = db.getFullData();
 *
 * // Calling saveData() to save the data in fake Database
 * db.saveData(data);
 */

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  rs.sendFile(__dirname + "/index.html");
});

app.get("/success", (req, res) => {
  res.sendFile(__dirname + "/success.html");
});

app.listen(1337, () => {
  console.log("Server started succefully");
});
