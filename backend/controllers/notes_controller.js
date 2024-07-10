const NoteModel = require('../models/notes_model')

module.exports.getAllNotes = async (req, res) => {
    const notes = await NoteModel.find();
    res.json(notes);
};

module.exports.createNote = async (req, res) => {
    const {title, content} = req.body;
    const note = new NoteModel({title, content});
    await note.save()
    res.status(201).json(note)
};

module.exports.deleteNote = async (req, res) => {
    const {_id} = req.params
    const deletedNote = await NoteModel.findByIdAndDelete(_id)
    if (!_id) {
        return res.status(404).json("note was not found")
    }

    res.json(deletedNote)
};