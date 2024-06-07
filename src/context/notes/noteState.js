import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:4000"
  const initialNotes = [];
  const [notes, setNotes] = useState(initialNotes);
    //get all note
  
    const getNotes = async () => {
      //API call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1NzFjOWIzZTFiZjEzNjgzZDQ2NWE1In0sImlhdCI6MTcxNjk4NTE1N30.Q_BhbCOhBrx0UUsIb1HUupKBEcDr14mbyhsFVqrpMR0"
        },
      });
      const json = await response.json();
      console.log(json);
       setNotes(json);
    }

  //Add a note
  
  const addNote = async (title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1NzFjOWIzZTFiZjEzNjgzZDQ2NWE1In0sImlhdCI6MTcxNjk4NTE1N30.Q_BhbCOhBrx0UUsIb1HUupKBEcDr14mbyhsFVqrpMR0"
      },
      body: JSON.stringify({title,description,tag}),
    });
    const json =  response.json();
    const note = {
      _id: "6661f931d043a6324692336g",
      user: "66571c9b3e1bf13683d465a5",
      title: title,
      description: description,
      tag: tag,
      date: "2024-06-06T18:00:17.032Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
    console.log("adding a new note");
  };
  //Delete a note
  const deleteNote = async(id) => {
    //api call
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "authToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1NzFjOWIzZTFiZjEzNjgzZDQ2NWE1In0sImlhdCI6MTcxNjk4NTE1N30.Q_BhbCOhBrx0UUsIb1HUupKBEcDr14mbyhsFVqrpMR0"
      },
    });
    const json =  await response.json();
    console.log(json)
    console.log("delete the note with id: " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit a note

  const editNote = async (id, title, description, tag) => {
    //api call

    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "authToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1NzFjOWIzZTFiZjEzNjgzZDQ2NWE1In0sImlhdCI6MTcxNjk4NTE1N30.Q_BhbCOhBrx0UUsIb1HUupKBEcDr14mbyhsFVqrpMR0"
      },
      body: JSON.stringify({title,description,tag}),
    });
    const json =  response.json();
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
