import React, { useState } from "react";

import NoteContext from "./NoteContext";

const NoteState=(props)=>{
  

const notesinitial=[
    {
      "_id": "62e6bff1e75e16cec2f57d1f",
      "user": "62e6987d539906118d81e906",
      "title": "go to university",
      "description": " got to school regularly",
      "tag": "education",
      "date": "2022-07-31T17:46:25.209Z",
      "__v": 0
    },
    {
      "_id": "62e815e188ce0b46e2815b1f",
      "user": "62e6987d539906118d81e906",
      "title": "go to university daily",
      "description": " got to school regularly on 3 time",
      "tag": "education 2",
      "date": "2022-08-01T18:05:21.407Z",
      "__v": 0
    },
    {
      "_id": "62e817ca8383793e2ab290ef",
      "user": "62e6987d539906118d81e906",
      "title": "go to university 2",
      "description": " got to school regularly 2",
      "tag": "education 2",
      "date": "2022-08-01T18:13:30.435Z",
      "__v": 0
    }
  ]

  const [notes, setNotes]=useState(notesinitial)
    
    return (
        <NoteContext.Provider value={{notes, setNotes}} >
            {
                props.children
            }
        </NoteContext.Provider>
    )
}


export default NoteState