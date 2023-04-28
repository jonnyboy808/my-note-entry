const express = require('express');
const path = require('path');
// ties the api to the required index.js from routes
const api = require ('./routes/index');

// creates an active port at 3001
const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
// pulls in the required api const from above for api
app.use('/api', api);

app.use(express.static('public'));

// pulls in the notes.html
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
    );
// pulls in the index.html
app.get('*', (req,res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
    );
// activates the listening port with the defined port from above
    app.listen(PORT, () =>
        console.log(`App listening at http://localhost:${PORT}`)
        );

