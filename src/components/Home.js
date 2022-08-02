import React  from 'react'
import '../css/home.css'
import Notes from './Notes'

export default function Home() {


  return (
  

    <div className='home-sec'>
      <h1>Add Note</h1>
      <div className="home-container">
        <div className='fields'>
          <label htmlFor="title">Title</label>
          <input type="text" id='title' placeholder='Enter Title ' />
        </div>
        <div className='fields'>
          <label htmlFor="tag">Tag</label>
          <input type="text" name="" id="tag" placeholder='Enter Tag' />
        </div>
        <div className='fields'>
          <label htmlFor="description">Description</label>
          <textarea type="text" rows="8" name="" placeholder='Enter Description' id="description" />
        </div>
        <Notes/>
      </div>
      
    </div>
    
  )
}
