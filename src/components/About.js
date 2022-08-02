import React, { useEffect } from 'react'
import '../css/about.css'
import { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'

export default function About() {

  const a = useContext(noteContext)
  useEffect(()=>{
    a.update("biloo")
  },[])
  return (
    <div className='about-sec'>
      <h1>this is about componet</h1>
      <button onClick={()=>a.update("yes bro")}>click</button>
      <h2>{a.state}</h2>
    </div>
  )
}
