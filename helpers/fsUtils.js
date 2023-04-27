const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
fs.writeFile(destination, JSON.stringify(content, null, 4) (err) =>
err ? console.log(err) : console.info(`\n Data written to ${destination}`)
);




const readFilterAndAppend = (file, identifier) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        const filteredData = parsedData.filter(obj => obj.id !== identifier);
        writeToFile(file, filteredData);
      }
    });
  };
  
  module.exports = { readFromFile, writeToFile, readAndAppend, readFilterAndAppend };