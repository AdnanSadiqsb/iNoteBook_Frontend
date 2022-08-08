import React  from 'react'
import '../css/home.css'
import AddNote from './AddNote'
import Notes from './Notes'
import niteImg from '../images/note1.jpg'
import {useNavigate} from 'react-router-dom'
export default function Home() {
const navigate=useNavigate()
  return (
  

<>    
      {
        !localStorage.getItem('authToken')?
          <div div className='home-img'>
          <h1 onClick={()=>{navigate('/Login')}}>Login First</h1>
          <img  src={niteImg} alt="" />
          </div>
          :
          <>
         <AddNote/>
          <Notes/>
        </>
      }
     
    
</>    
    
  )
}
