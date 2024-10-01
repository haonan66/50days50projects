import { useState } from "react";
import "./index.scss";
import Notes from "./Notes";

export type Note = {
  id: number;
  content: string;
};
export default function NotesApp() {
  const [notes, setNotes] = useState<Note[]>(
    JSON.parse(localStorage.getItem("notes") || "[]")
  );

  const addNote = () => {
    const newNote: Note = {
      id: Date.now(),
      content: "",
    };
    setNotes([...notes, newNote]);
    localStorage.setItem("notes", JSON.stringify([...notes, newNote]));
  };

  const saveNote = (note: Note) => {
    const newNotes = notes.map((item) => {
      if (item.id === note.id) {
        return note;
      }
      return item;
    });
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const deleteNote = (id: number) => {
    const newNotes = notes.filter((item) => item.id !== id);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  return (
    <div className="notes-app-wrap">
      <div className="header">
        <button onClick={addNote}>+ Add note</button>
      </div>
      <div className="notes-container">
        {notes.map((note) => (
          <Notes
            key={note.id}
            note={note}
            saveNote={saveNote}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  );
}
