// imports the core modules of fs and util
const fs = require('fs');
const util = require('util');

// creates a promisified version of the fs.readFile
const readFromFile = util.promisify(fs.readFile);

// writes to file and if there is an error a message will be logged to console
// If no error Data written to db.json will be logged to the console
const writeToFile = (req, res) =>
fs.writeFile(req, JSON.stringify(res, null, 4), (err) =>
err ? console.error(err) : console.info(`\n New data written to ${req}`)
);

// read the file and then appends it using the write to file function
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

// reads the contents of the file and then filters out the object with specific id
// filtered data is then written to the file
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
  
  // exports readFromFile, writeToFile, readAndAppend, readFilterAppend functions
  module.exports = { readFromFile, writeToFile, readAndAppend, readFilterAppend };