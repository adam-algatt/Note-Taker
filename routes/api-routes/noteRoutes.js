const router = require('express').Router();
const { getId, saveNote } = require('../../public/utils/noteTaker');
const { notes } = require('../../db/db.json');
// let $ = req.body; 
// retrieve all notes from JSON db

router.get('/notes', (req, res) => {
 let results = notes; 
 res.json(results);
        })
    
router.post('/notes', (req, res) => {
req.body.id = getId(); 
// console.log(req.body.id);
//use newNote f(x) from noteTaker.js to add a new note
const newNote = saveNote(req);

//respond with the newNote
res.json(newNote);
// reload page, so notetaker is ready for new note after
//add
window.location.reload(); 
})



module.exports = router; 

