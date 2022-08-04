const fs = require('fs');
const path = require('path'); // check
const router = require('express').Router();
// const fs = require('../../public/');


router.get('/notes', (req, res) => {
res.sendFile(path.join(__dirname, '../../public/notes.html'))
});

// catch route to return !/notes back to index.html page
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})

module.exports = router; 
