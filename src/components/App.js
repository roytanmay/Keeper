import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function onAdd(inputNote) {
    setNotes((prevNote) => {
      return [...prevNote, inputNote];
    });
  }

  function onDelete(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={onAdd} />
      <div>
        {notes.map((note, index) => (
          <Note key={index} id={index} title={note.title} content={note.content} deleteNote={onDelete} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
