import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my first note!",
    date: "06/22/2021"
  },
    {
    id: nanoid(),
    text: "This is my second note!",
    date: "06/22/2021"
  },
    {
    id: nanoid(),
    text: "This is my third note!",
    date: "06/22/2021"
  }
]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text, 
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  return (
    <div className="container">
    <NotesList notes={notes} handleAddNote={addNote}/>
    </div>
  );
}

export default App;
