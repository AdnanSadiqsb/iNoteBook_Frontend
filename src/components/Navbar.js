import React, {useEffect, useContext}from 'react'
import '../css/navbar.css'
import {Link, useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import noteContext from '../context/notes/NoteContext'
export default function Navbar() {
const navigate= useNavigate()
const openMenue=()=>{
    var menubtn = document.getElementById("menu")
    menubtn.classList.toggle('active')
   
}
const context = useContext(noteContext)
const {getUserInfo,userData}= context
let loc =useLocation()
useEffect(()=>{
    console.log(loc.pathname)
},[loc]);
const getuserInfos=()=>{
    getUserInfo()
}
const handleLogout=()=>{
    localStorage.removeItem('authToken')
    navigate('/')
}
  return (


    <>
    <header>

    <Link to="/" className="logo">INoteBook</Link>
    <div className="navigation">
        <ul className="menu" id='menu'>
            <div className="close">
                <i class="fa-solid fa-xmark" onClick={openMenue}></i>                

            </div>
            <li className= "menur-item"   ><Link className={loc.pathname==='/'?'active-link':" " }  to="/">Home</Link></li>
            <li className="menur-item"><Link className={loc.pathname==='/About'?'active-link':" " } to="/About">About</Link></li>
            <li className="menur-item"><Link to="/About">Services </Link></li>
            <li className="menur-item"><Link to="/About">Contact</Link></li>
         
            
        </ul>

    </div>
    {
            !localStorage.getItem('authToken')?
            <div className="log-cont">
            <Link  className='log-btn log-con-link' to='/Login'>Login</Link>
            <Link className='log-btn log-con-link' to='/SignUp'>SignUp</Link>
            </div>:
            <div className='log-con'>
            <i style={{color:'white', fontSize:'1.5rem' }} onClick={getuserInfos} class="fa-regular fa-user"></i>
            <Link  className='log-btn log-con-link' to='/' onClick={handleLogout} >logout</Link>
         

            </div>
            }
    <div className="menu-btn" id='menu-btn'>
        <i class="fa-solid fa-bars" onClick={openMenue}></i>

    </div>
    <div className="user-info">
                <p>{userData.name}</p>
                <p>{userData.email}</p>
                <p>{userData.date}</p>
    </div> 
   
    </header>
   
  
</>
  )

  
}



