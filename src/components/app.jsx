import React, { useState } from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Note from "./note.jsx";
import notes from "../notes.js";
import CreateForm from "./createForm.jsx";

function createNotes(noteItem){
    return(
        <Note 
        key={noteItem.key}
        title={noteItem.title} 
        content={noteItem.content} 
        />
    );
};

function App(){

    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevNotes => {
            return [...prevNotes , newNote];
        });
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }
    return (
    <div>
        <Header /> 
        <CreateForm onAdd={addNote} />
        {/* <Note key={1} title="note Title" content="Note content" />  */}
        {/* {notes.map(createNotes)} */}
        {notes.map((noteItem, index) => {
            return(
                <Note 
                key= {index}
                id= {index}
                title= {noteItem.title} 
                content= {noteItem.content} 
                onDelete= {deleteNote}
                />  
            );
        })}
        <Footer />
    </div>
    );
}

export default App;