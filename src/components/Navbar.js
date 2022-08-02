import React from 'react'
import '../css/navbar.css'
import moreImg from '../images/more.png'
import closeImg from '../images/close.png'
import {Link} from 'react-router-dom'
export default function Navbar() {

const openMenue=()=>{
    console.log("menue cliked")
    var menubtn = document.getElementById("menu")
    menubtn.classList.toggle('active')

}


  return (


    <>
    <header>

    <Link to="/" className="logo">logo</Link>
    <div className="navigation">
        <ul className="menu" id='menu'>
            <div className="close">
                <img src={closeImg} onClick={openMenue} alt=""/>
            </div>
            <li className="menur-item"><Link to="/">home</Link></li>
            <li className="menur-item"><Link to="/">services</Link></li>
            <li className="menur-item"><Link to="/">about </Link></li>
            <li className="menur-item"><Link to="/">contact</Link></li>

        </ul>
    </div>
    <div className="menu-btn" id='menu-btn'>
        <img onClick={openMenue} src= {moreImg} alt=""/>
    </div>
    </header>
   
  
</>
  )

  
}



