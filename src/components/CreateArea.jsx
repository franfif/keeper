import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

function CreateArea(props) {

    const [newNote, setNewNote] = useState({
        id: Date.now(),
        title: "",
        content: ""
    });

    const [isExpanded, setExpanded] = useState(false);

    function typing(e) {
        const { value, name: field } = e.target;
        setNewNote(former => {
            return { ...former, [field]: value }
        });
    }

    function submitNote(e) {
        if (newNote.title !== "" || newNote.content !== "") {
            props.addNote(newNote);
            setNewNote({
                id: Date.now(),
                title: "",
                content: ""
            });
            condense();
            e.preventDefault();
        } else { console.log("No content"); }
    }

    function expand() {
        setExpanded(true);
    }
    function condense() {
        setExpanded(false);
    }

    return (
        <div>
            <form className="create-note" onSubmit={submitNote}>
                <input
                    style={{ display: isExpanded || "none" }}
                    onChange={typing}
                    name="title"
                    type="text"
                    value={newNote.title}
                    placeholder="Title" />

                <textarea
                    onChange={typing}
                    name="content"
                    type="text"
                    value={newNote.content}
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                    onClick={expand}
                />

                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;