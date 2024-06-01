import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props)=>{
    const s1 = {
        name: "daksh",
        class: "3year"
    }
    const [state, setState] = useState(s1);
    const update = ()=>{
        setTimeout(()=>{
            setState({
                name: "pandey",
                class:"5th sem"
            },1000)
        })
    }
    return (
        <NoteContext.Provider value = {{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;