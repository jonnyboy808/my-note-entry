const api = require('express').Router();
const { readFromFile, readAndAppend, readFilterAppend, readFilterAndAppend } = require('../helpers/fsUtils');


const uuid = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

// const { v4: uuidv4 } = require('uuid');

api.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

api.post('/', (req, res) => {
    const {title, text } = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('Note added. ');
    } else {
        res.error('Error adding note. ');
    }
});

api.delete('/:id', (req, res) => {
    const { id } = req.params;
    if (id) {
        readFilterAndAppend('./db/db.json', id);
        res.json('Notes deleted. ');
        res.error('Error deleting note. ');
    }
});

module.exports = api;