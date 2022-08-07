import React, { useState } from "react";

import NoteContext from "./NoteContext";

const NoteState=(props)=>{
  
const host="http://localhost:5000"
const notesinitial=[]

  const [notes, setNotes]=useState(notesinitial)
  const [userData, setUserData]=useState("")

    // get all notes a note
    const getAllNotes=async ()=>{
        //Todo api call
        var url=`${host}/api/notes/fetchAllNotes`
        const response=await fetch(url, {
         method: 'GET', // or 'PUT'
         headers: {
             'Content-Type': 'application/json',
             'auth-token': localStorage.getItem('authToken')
    
         },
         });
    
        const json =await response.json()

       setNotes(json)
      }
  // add a note
  const addNotes=async (note)=>{
    //Todo api call
    if(note.tag==""||note)
    {
        delete note['tag']
        console.log(note)
    }
    console.log(note)
    var url=`${host}/api/notes/addNotes`
    const response=await fetch(url, {
     method: 'POST', // or 'PUT'
     headers: {
         'Content-Type': 'application/json',
         'auth-token': localStorage.getItem('authToken')

     },

     body: JSON.stringify(note),
     });

   var newnote= await response.json();
   setNotes(notes.concat(newnote))
  }
  //delte a node
  const deleteNote= async(id)=>{

    console.log("delteing the node "+id)
    const newNotes= notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)

    //server side
    var url= `${host}/api/notes/deleteNotes/${id}`
    const response=await fetch(url, {
        method: 'DELETE', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('authToken')

        },
        });

        const json =await response.json()
        console.log(json)

  }
  const getUserInfo=async()=>{
    var url= `${host}/api/auth/getUser/`
    const response=await fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('authToken')

        },
        });

        const json =await response.json()
        setUserData(json)
        console.log(json)
  }
  // uodate a node
  const updateNote=async (note)=>{
     // edit in client side

     //creating a new note then we update it and setNote
     const newNote=JSON.parse(JSON.stringify(notes))
     for (let index = 0; index < newNote.length; index++) {
        const element = notes[index];
        if(element._id==note.id)
        {
            newNote[index].title=note.title
            newNote[index].tag=note.tag
            newNote[index].description=note.description
            break
        }
        
    }
    setNotes(newNote)
    console.log("updated")
    // api call
    const {title, description, tag}= note
    var url=`${host}/api/notes/updateNotes/${note.id}`
    const response=await fetch(url, {
        method: 'PUT', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('authToken')
            
        },
        body: JSON.stringify({title, description, tag}),
    });
    
        const json =await response.json()
        


       

    }
    return (
        <NoteContext.Provider value={{notes,getAllNotes, setNotes, deleteNote, updateNote, addNotes,getUserInfo}} >
            {
                props.children
            }
        </NoteContext.Provider>
    )
}


export default NoteState