const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require("uuid");
const { validate: uuidValidate } = require("uuid");
const { notes } = require('../../db/db.json');
let noteId;


const saveNote = function (newNote) {
    console.log(newNote);
let noteObj = {}; 
noteObj.id = noteId;
noteObj.title = newNote.body.title; 
noteObj.text = newNote.body.text; 
    notes.push(noteObj);

    //add new note to db.json and format the json file 
    //so it doesn't like garbage
    fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify({ notes }, null, "\t")
    )


return console.log(noteObj);
}

// function to add unique id to note
const getId = function () {
const Id = uuidv4();
const isValid = uuidValidate(Id);

isValid === true ? noteId = Id : getId(); 
}

module.exports = {
    getId,
    saveNote
};