const express = require('express');
const path = require('path');
const api = require ('./public/assets/js/index.js');

const PORT = process.env.port || 3001;

const app = express();


app.use(express.static('public'));

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
    );

app.get('*', (req,res) =>
    res.sendFile(path.join(__dirname, '/public/index.html')))

