const api = require('express').Router();
// const from fsUtils file being called and used within the note.js file
const { readFromFile, readAndAppend, readFilterAppend } = require('../helpers/fsUtils');

// generator for a random identifier for each note id
const uuid = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

//   parses the data for db.json
api.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// create a new note with title, text, and a unique identifier with const uuid
api.post('/', (req, res) => {
    const {title, text } = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };
// appends the new note to the db.json file
        readAndAppend(newNote, './db/db.json');
        res.json('Note added. ');
    } else {
        res.error('Error adding new note. ');
    }
});
// refers to the note id to become deletable
api.delete('/:id', (req, res) => {
    const { id } = req.params;
    if (id) {
        readFilterAppend('./db/db.json', id);
        res.json('Notes deleted. ');
    } else {
        res.error('Error deleting note. ');
    }
});
// exports as the api
module.exports = api;