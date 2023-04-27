const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (req, res) =>
fs.writeFile(req, JSON.stringify(res, null, 4), (err) =>
err ? console.error(err) : console.info(`\n Data written to ${req}`)
);

const readAndAppend = (req, res) => {
    fs.readFile(res, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        const parsedData = JSON.parse(data);
        parsedData.push(req);
        writeToFile(res, parsedData);
    }
});
};


const readFilterAppend = (req, res) => {
    fs.readFile(req, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        const filteredData = parsedData.filter(obj => obj.id !== res);
        writeToFile(req, filteredData);
      }
    });
  };
  
  module.exports = { readFromFile, writeToFile, readAndAppend, readFilterAppend };