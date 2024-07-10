const {Router} = require('express')
const {getAllNotes, createNote, deleteNote} = require('../controllers/notes_controller')

const router = Router()

router.get('/', getAllNotes)
router.post('/', createNote)
router.delete('/:_id', deleteNote)


module.exports = router