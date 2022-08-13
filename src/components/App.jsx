import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";


function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => [...prevNotes, newNote]);
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((note) => note.id !== id);
        });
    }

    return (
        <div>
            <Header />
            <CreateArea addNote={addNote} />
            {notes.map(n => (
                <Note
                    key={n.id}
                    id={n.id}
                    title={n.title}
                    content={n.content}
                    deleteNote={deleteNote}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;