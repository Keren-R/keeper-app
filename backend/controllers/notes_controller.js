const NoteModel = require('../models/notes_model')

module.exports.getAllNotes = async (req, res) => {
    const notes = await NoteModel.find();
    res.send(notes);
};

module.exports.createNote = async (req, res) => {
    const {title, content} = req.body;
    const note = new NoteModel({title, content});
    await note.save()
    res.status(201).send(note)
};

module.exports.deleteNote = async (req, res) => {
    const {_id} = req.body
    const deletedNote = await NoteModel.findByIdAndDelete(_id)
    if (!_id) {
        return res.status(404).send("note was not found")
    }

    res.send(deletedNote)
};