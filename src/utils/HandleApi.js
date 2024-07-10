import axios from 'axios'

const baseUrl = "http://localhost:3000/"

const getAllNotesFromDB = (setNotes) => {
    axios
        .get(baseUrl)
        .then(({data}) => {
            console.log('data:   ', data)
            setNotes(data)
        })
}

const addNoteToDB = (newNote, setNotes) => {
    axios
        .post(baseUrl, newNote)
        .then(({data}) => {
            console.log('added note:', data)
            getAllNotesFromDB(setNotes)
        })
}

const deleteNoteFromDB = (noteID, setNotes) => {
    axios
        .delete(`${baseUrl + noteID}`)
        .then(({data}) => {
            console.log('deleted note:', data)
            getAllNotesFromDB(setNotes)
        })
}

export {getAllNotesFromDB, addNoteToDB, deleteNoteFromDB}