# My Note Entry

![https://img.shields.io/badge/license-MIT-green](https://img.shields.io/badge/license-MIT-green)

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Code Example](#code-example)
* [Walkthrough](#walkthrough)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)



## Description
An easy to use command line interface applications that creates a personal SVG logo based on just answering a few command line questions. The application is capable of creating a circle, square, or triangle shape with an option of up to three characters. Options include choosing the color of the shape and the text by either entering the color text or the hexadecimal color code.

## Installation
Installation steps of this application would require forking this repo and cloning it to your local machine to run. After forking, open it with your preferred code application, or run it directly from your command line.

## Code Example
Below is an example of code that creates a new note, with the addition to the code the allows for notes to be deleted
```JS
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
        res.error('Error adding new note. ');
    }
});

api.delete('/:id', (req, res) => {
    const { id } = req.params;
    if (id) {
        readFilterAppend('./db/db.json', id);
        res.json('Notes deleted. ');
    } else {
        res.error('Error deleting note. ');
    }
});
```
Additional example using regular expression to call in a hexadecimal color code.
```JS
 // hexadecimal color entry, validates if entry matches that of hex RegEx
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a hexadecimal color for your shape, i.e.(#ffffff):',
        when: (answers) => {
            if(answers.shapeColorFormat === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log('\n Please enter a valid hexadecimal')
            }
            return true;
        }
    },
```

## Walkthrough 
Bellow is a walkthrough clip

![Gif walkthrough](./lib/images/walkthrough-clip.gif)

For full video follow this link:
[Walkthrough Video](https://drive.google.com/file/d/14UQJPJBKa2sD4RZ_sbFJNKHDpAinv7Ne/view)

## Usage
After cloning this repo to your local machine, open it with your preferred application or start directly from your command line. You will need to run the "node index.js" command to get started. Once initiated, the application will give a series of prompts with questions. Note that all questions must be answered for the application to work correctly. At the end of the prompts you will receive a message acknowledging that a new SVG logo has been generated.



## License
![https://img.shields.io/badge/license-MIT-green](https://img.shields.io/badge/license-MIT-green)

For additional information on this license please use the provided link
https://choosealicense.com/licenses/mit/

## Questions
Github: https://github.com/jonnyboy808


