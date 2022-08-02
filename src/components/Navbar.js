import React, {useEffect}from 'react'
import '../css/navbar.css'
import moreImg from '../images/more.png'
import closeImg from '../images/close.png'
import {Link, useLocation} from 'react-router-dom'
export default function Navbar() {

const openMenue=()=>{
    console.log("menue cliked")
    var menubtn = document.getElementById("menu")
    menubtn.classList.toggle('active')

}

let loc =useLocation()
useEffect(()=>{
    console.log(loc.pathname)
},[loc]);
  return (


    <>
    <header>

    <Link to="/" className="logo">INoteBook</Link>
    <div className="navigation">
        <ul className="menu" id='menu'>
            <div className="close">
                <img src={closeImg} onClick={openMenue} alt=""/>
            </div>
            <li className="menur-item "><Link className={loc.pathname==='/'?'linkActive':" " } to="/">Home</Link></li>
            <li className="menur-item"><Link className={loc.pathname==='/About'?'linkActive':" " } to="/About">About</Link></li>
            <li className="menur-item"><Link to="/">Services </Link></li>
            <li className="menur-item"><Link to="/">Contact</Link></li>

        </ul>
    </div>
    <div className="menu-btn" id='menu-btn'>
        <img onClick={openMenue} src= {moreImg} alt=""/>
    </div>
    </header>
   
  
</>
  )

  
}



