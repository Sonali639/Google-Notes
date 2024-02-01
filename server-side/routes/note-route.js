const express = require('express');
const router = express.Router();
const notesController = require('../controllers/note-controller');

// Route for getting all notes
router.get('/', notesController.getAllNotes);

// Route for adding a new note
router.post('/add', notesController.addNote);

// Route for updating a note
router.post('/update/:id', notesController.updateNote);

// Route for deleting a note
router.delete('/:id', notesController.deleteNote);

module.exports = router;
