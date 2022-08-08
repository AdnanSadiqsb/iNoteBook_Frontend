import React,{useContext, useEffect, useState, useRef} from 'react'
import noteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'
import '../css/notes.css'
import '../css/home.css'
import alertContext from '../context/notes/AlertContext'
import {useNavigate} from 'react-router-dom'

export default function Notes() {
  const navigation = useNavigate()
  const contextAlert=useContext(alertContext)
  const {setAlert}=contextAlert
const context= useContext(noteContext)
const [note, setNote]=useState({id:"",title:"", description:"", tag:""})
const {notes,getAllNotes, updateNote} = context
const ref =useRef(null)

useEffect(()=>{
  if(localStorage.getItem('authToken')==null||localStorage.getItem('authToken')=="")
  {


    navigation('/login')
  }
  else{
    getAllNotes()
    ref.current.click()
    setAlert({type:"success",msg:"All notes are fetched"})
  }


},[])

const handleClick=()=>{

    // addNotes(note)
    updateNote(note)
    toggleSec()
    setAlert({type:"success",msg:"Note is updated success fuly"})

    

}
const onChange=async(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
    
}
   
  
    const updateNotes=(note)=>
    {
        console.log(note)
        dispalySec()
        setNote({id:note._id,title:note.title, description:note.description, tag:note.tag})

    }
    const dispalySec=()=>{
        const updateEl=document.getElementById('update-section')
        updateEl.classList.remove('toggle')
    }
    const toggleSec=()=>{
        const updateEl=document.getElementById('update-section')
        updateEl.classList.add('toggle')
    }
  return (
    <>
    <div className="update-section" id='update-section'>
    <div className="update-con">
    <h1>Update Note</h1>
      <div className="home-container">
        <div className='fields'>
          <label htmlFor="title">Title</label>
          <input type="text" id='title' name='title' placeholder='Enter Title ' onChange={onChange} value={note.title} />
        </div>
        <div className='fields'>
          <label htmlFor="tag">Tag</label>
          <input type="text" name="tag" id="tag"  placeholder='Enter Tag' onChange={onChange} value={note.tag} />
        </div>
        <div className='fields'>
          <label htmlFor="description">Description</label>
          <textarea type="text" name="description" rows="8" placeholder='Enter Description' id="description" onChange={onChange} value={note.description} />
        </div>
        <button type='submit' className='stn-submit' onClick={handleClick}>Update</button>
      </div>
      <h1 ref={ref} className='cancel-btn'onClick={toggleSec} >X</h1>
    </div>
    </div>


    <div>
        <h2 className='note-heading' >Your Notes</h2>
        <div className="notes-container">
          {notes.length===0 && 'No notes to dispaly'}
        {
            notes.map((note)=>{
                return  <NoteItem note={note} updateNotes={updateNotes} key={note._id} />
            })
        }
        </div>
     
    </div>
    </>
  )
}
