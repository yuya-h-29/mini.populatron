const csv = require("csv-parser");
const fs = require("fs");
const results = [];

fs.createReadStream("cities.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {});

module.exports = {
  totalPopulation(onFinished) {
    let total = 0;
    for (let i = 0; i < results.length; i++) {
      let num = Number(results[i].population);
      total = total + num;
    }
    onFinished(total);
  },
};
