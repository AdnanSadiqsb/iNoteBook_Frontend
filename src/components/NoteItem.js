import React,{useContext, useState} from 'react'
import noteContext from '../context/notes/NoteContext'
import '../css/notes.css'
import alertContext from '../context/notes/AlertContext'


export default function NoteItem(props) {
    const contextAlert=useContext(alertContext)
    const {setAlert}=contextAlert
    const context =useContext(noteContext)
    const {deleteNote}=context
    const deleteBtn=(id)=>{
        deleteNote(id)
        setAlert({type:"danger",msg:"note success fuly"})

    }
    const {_id,title, description, tag,date}= props.note
    const {updateNotes}= props

  return (
    
 

    <div>
        <div className="note-item">
            <div className="noteTitle">
            <h2>{title} </h2>

            </div>
            <i className="fa-solid fa-money-check-pen"></i>
            <p className='tag'>{tag}</p>
            <p className='description'>{description} </p>
            <p className='noteDate'>{date}</p>
            <div className="icons">
                <i className="fa-solid fa-trash-can" onClick={()=>deleteBtn(_id)}></i>
                <i className="fa-solid fa-file-pen" onClick={()=>updateNotes(props.note)} ></i> 
            </div>
        </div>

        
        

    </div>
    
  )
}
