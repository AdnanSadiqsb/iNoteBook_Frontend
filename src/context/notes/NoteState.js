import React, { useState } from "react";

import NoteContext from "./NoteContext";

const NoteState=(props)=>{
  

    const [state, setState]=useState("hlo word")

   const update=(name)=>{
        setTimeout(() => {
            setState(name)
        },1000);
    }
    
    return (
        <NoteContext.Provider value={{state, update}} >
            {
                props.children
            }
        </NoteContext.Provider>
    )
}


export default NoteState