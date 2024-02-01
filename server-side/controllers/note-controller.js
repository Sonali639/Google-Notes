const Note = require('../models/note-model');

// Controller for handling CRUD operations on notes
const notesController = {
    getAllNotes: async (req, res) => {
        try {
            const notes = await Note.find();
            res.json(notes);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    addNote: async (req, res) => {
        const { title, content } = req.body;

        try {
            const newNote = new Note({ title, content });
            await newNote.save();
            res.json('Note added!');
        } catch (error) {
            res.status(400).json({ error: 'Bad Request' });
        }
    },

    updateNote: async (req, res) => {
        // Implement update logic here
    },

    deleteNote: async (req, res) => {
        // Implement delete logic here
        const noteId = req.params.id; // Assuming you have the note ID in the URL parameters

        try {
            const deletedNote = await Note.deleteOne({ _id: noteId });

            if (deletedNote.deletedCount === 0) {
                return res.status(404).json({ error: 'Note not found' });
            }

            res.json('Note deleted!');
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

module.exports = notesController;
