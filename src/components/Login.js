import React, { useState, useContext } from 'react'
import '../css/home.css'
import '../css/notes.css'
import {useNavigate} from 'react-router-dom'
import alertContext from '../context/notes/AlertContext'
import {Link} from 'react-router-dom'
export default function Login() {

    const context=useContext(alertContext)
    const {setAlert}=context

    const navigate=useNavigate()
    const [loginInfo, setLoginInfo]=useState({email:"",password:""})
    const onchangeHandle=async(e)=>{

        setLoginInfo({...loginInfo, [e.target.name]:e.target.value})
    }

    const loginClick=(e)=>{
        e.preventDefault()
        console.log(loginInfo)
        checkLogin(loginInfo)
        setLoginInfo({email:"",password:""})
    }
    const goHome=()=>{
        navigate('/')
    }
    const checkLogin=async(loginInfo)=>{
        var url=`http://localhost:5000/api/auth/userLogin`
        const response=await fetch(url, {
         method: 'POST', // or 'PUT'
         headers: {
             'Content-Type': 'application/json',
             'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlNjk4N2Q1Mzk5MDYxMThkODFlOTA2In0sImlhdCI6MTY1OTI3OTQ4N30.WRsfWwCP0BmldVM6Ia0nnluaa6kFDLWh3sRdSBxO__k'
    
         },
    
         body: JSON.stringify(loginInfo),
         });

         var json=await response.json()
         console.log(json)
         console.log(json.success)
         localStorage.setItem('authToken',json.authToken)
         console.log(json.authToken)
         if(json.success===true)
         {
            navigate('/')
            setAlert({type:"success",msg:"login success fuly"})

         }
         else{
            setAlert({type:"danger",msg:"invalid information"})

         }
    }

  return (
    <div>
        <form onSubmit={loginClick}>

    <div className="update-section" id='update-section'>
    <div className="update-con">
    <h1 className='note-heading'>Login Here</h1>
      <div className="home-container">
        <div className='fields'>
          <label htmlFor="title">Email</label>
          <input type="Email" id='title' name='email' placeholder='Enter Email ' required value={loginInfo.email} onChange={onchangeHandle} />
        </div>
        <div className='fields'>
          <label htmlFor="tag">Password</label>
          <input type="Password" name="password" id="tag"  placeholder='Enter Password' required minLength={5} value={loginInfo.password} onChange={onchangeHandle}  />
        </div>
  
        <button type='submit' className='stn-submit' >Login</button>
        <Link to="/SignUp" >SignUp</Link>

      </div>
      <h1 className='cancel-btn' onClick={goHome} >X</h1>
    </div>
    </div>
    </form>
    </div>
  )
}
