import React, {useContext, useState}from 'react'
import noteContext from '../context/notes/NoteContext'
import '../css/home.css'
import alertContext from '../context/notes/AlertContext'

export default function AddNote() {
const context= useContext(noteContext)
const {addNotes}= context
const contextAlert=useContext(alertContext)
const {setAlert}=contextAlert
const handleClick=()=>{

    addNotes(note)
    setNote({title:" ",description:"",tag:""})
    setAlert({type:"success",msg:"New Note added success fuly"})



}
const [note, setNote]=useState({title:"", description:"", tag:""})
const onChange=async(e)=>{
    
    setNote({...note,[e.target.name]:e.target.value})

}
  return (
    <div className='home-sec'>

    
        <h1>Add Note</h1>
      <div className="home-container">
        <div className='fields'>
          <label htmlFor="title">Title</label>
          <input type="text" id='title' minLength={3} required name='title' value={note.title} placeholder='Enter Title ' onChange={onChange} />
        </div>
        <div className='fields'>
          <label htmlFor="tag">Tag</label>
          <input type="text" name="tag" id="tag"  placeholder='Enter Tag' value={note.tag} onChange={onChange} />
        </div>
        <div className='fields'>
          <label htmlFor="description">Description</label>
          <textarea type="text" name="description" rows="8" required minLength={5} value={note.description} placeholder='Enter Description' id="description" onChange={onChange} />
        </div>
        <button disabled={note.title.length<3||note.description.length<5} type='submit' className='stn-submit' onClick={handleClick}>Submit</button>
      </div>
    
    </div>
  )
}
