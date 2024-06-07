import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props)=>{
    const initialNotes = [
        
            {
              "_id": "6661f926d043a6324692336b",
              "user": "66571c9b3e1bf13683d465a5",
              "title": "my first note",
              "description": "the name suggests its apt description",
              "tag": "personal",
              "date": "2024-06-06T18:00:06.019Z",
              "__v": 0
            },
            {
              "_id": "6661f92dd043a6324692336d",
              "user": "66571c9b3e1bf13683d465a5",
              "title": "my second note",
              "description": "the name suggests its apt description",
              "tag": "personal",
              "date": "2024-06-06T18:00:13.097Z",
              "__v": 0
            },
            {
              "_id": "6661f931d043a6324692336f",
              "user": "66571c9b3e1bf13683d465a5",
              "title": "my third note",
              "description": "the name suggests its apt description",
              "tag": "personal",
              "date": "2024-06-06T18:00:17.032Z",
              "__v": 0
            }
          ]
          const [notes, setNotes] = useState(initialNotes);

          //Add a note
          const addNote = (title,description,tag)=>{
            const note =             {
              "_id": "6661f931d043a6324692336g",
              "user": "66571c9b3e1bf13683d465a5",
              "title": title,
              "description": description,
              "tag": tag,
              "date": "2024-06-06T18:00:17.032Z",
              "__v": 0
            };
            setNotes(notes.concat(note));
            console.log('adding a new note');
          }
          //Delete a note
          const deleteNote = ()=>{

          }
          //Edit a note
          const editNote = ()=>{

          }
    return (
        <NoteContext.Provider value = {{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;