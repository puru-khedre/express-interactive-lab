const express = require("express");
const app = express();

/*
 * Adding your code here
 */

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(1337, () => {
  console.log("Server started at port 1337");
});
