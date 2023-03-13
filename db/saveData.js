const path = require("path");
const fs = require("fs");

const dataFilePath = path.join(__dirname, "data.json");

function saveData(data) {
  try {
    const prevData = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
    let id = prevData.length;
    let currData = [...prevData, data];

    fs.writeFileSync(dataFilePath, JSON.stringify(currData));
    return id;
  } catch (error) {
    return null;
  }
}

module.exports = saveData;
