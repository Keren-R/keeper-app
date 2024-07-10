import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { getAllNotesFromDB, addNoteToDB, deleteNoteFromDB } from "../utils/HandleApi";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotesFromDB(setNotes)
  }, [])


  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    // update db 
    addNoteToDB(newNote, setNotes);
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem) => {
        return noteItem._id !== id;
      });
    });

    // update db
    deleteNoteFromDB(id, setNotes);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
