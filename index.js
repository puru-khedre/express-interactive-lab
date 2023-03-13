const saveData = require("./db/saveData");

/**
 * Calling saveData() to save the data in fake Database
 * const data = { d1, d2, d3 };
 * saveData(data);
 */

const express = require("express");
const app = express();

app.get("/", (rq, rs) => {
  rs.sendFile(__dirname + "/index.html");
});

app.listen(1337, () => {
  console.log("Server started succefully");
});
