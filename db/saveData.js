const path = require("path");
const fs = require("fs");

const dataFilePath = path.join(__dirname, "data.json");

function saveData(data) {
  fs.readFile(dataFilePath, "utf-8", (err, str) => {
    let prevData = JSON.parse(str);
    let id = Object.keys(prevData).length + 1;
    let currData = { ...prevData, [id]: data };
    fs.writeFileSync(dataFilePath, JSON.stringify(currData), "utf-8");
  });
}

module.exports = saveData;
