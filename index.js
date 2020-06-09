const fs = require("fs");
const csv = require("csv");

const src = {};

// dummy impl for moneyforward js
$ = () => {
  return { val: () => 0, show: () => { }, addClass: () => { }, removeClass: () => { } }
};
drawAssetTimeSeriesTrendChart = (categoriesData, timeSeriesData) => {
  src.categoriesData = categoriesData;
  src.timeSeriesData = timeSeriesData;
};

// read
const path = "./data/ryoji_sbi_20200609.js";
require(path);

const rows = src.categoriesData.map((key, i) => {
  return [
    key,
    ...src.timeSeriesData.map(series => series.data[i])
  ];
});
const dest = [
  ["date", ...src.timeSeriesData.map(series => series.name)],
  ...rows
];

// write
csv.stringify(dest, (error, output) => {
  fs.writeFile(path.replace(".js", ".csv"), output, (error) => {
    console.log("done!");
  });
})