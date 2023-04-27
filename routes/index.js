const express = require('express');
// calls the required notes.js file
const notesRouter = require('./notes');

// middleware function for notes.js to work correctly
const api = express();

api.use('/notes', notesRouter);

// exports as api
module.exports = api;