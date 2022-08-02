import React,{useContext} from 'react'
import noteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'
import '../css/notes.css'

export default function Notes() {
    const context= useContext(noteContext)

    const {notes, setNotes} = context
  return (
    <div>
        <h2>Your Notes</h2>
        <div className="notes-container">
        {
        notes.map((note)=>{
        return <NoteItem note={note} />
        })
      }
        </div>
     
    </div>
  )
}
