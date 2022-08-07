import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
export default function SignUp() {
    const navigate=useNavigate()
    const[signUpInfo, setSignupInfo]= useState({name:"",email:"",password:""})

    const onchangeHandle=(e)=>{
        setSignupInfo({...signUpInfo, [e.target.name]:e.target.value})
    }

    const signUPClick=(e)=>{
        e.preventDefault()
        console.log(signUpInfo)
        checkSignUp(signUpInfo)
        setSignupInfo({name:"",email:"",password:""})
    }

    const goHome=()=>{
        navigate('/')
    }
    const checkSignUp=async(signUpInfo)=>{
        var url=`http://localhost:5000/api/auth/createUser/`
        const response=await fetch(url, {
         method: 'POST', // or 'PUT'
         headers: {
             'Content-Type': 'application/json',
             'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlNjk4N2Q1Mzk5MDYxMThkODFlOTA2In0sImlhdCI6MTY1OTI3OTQ4N30.WRsfWwCP0BmldVM6Ia0nnluaa6kFDLWh3sRdSBxO__k'
    
         },
    
         body: JSON.stringify(signUpInfo),
         });

         var json=await response.json()
         console.log(json)
       
         if(json.success===true)
         {
            navigate('/Login')
         }
    }
  return (
    <div>
     <form onSubmit={signUPClick} >
    <div className="update-section" id='update-section'>
    <div className="update-con">
    <h1>SignUp Here</h1>
     <div className="home-container">
      <div className='fields'>
          <label htmlFor="name">User Name</label>
          <input type="text" id='name' name='name' placeholder='Enter Name '  required minLength={5} value={signUpInfo.name} onChange={onchangeHandle} />
        </div>
        <div className='fields'>
          <label htmlFor="title">Email</label>
          <input type="Email" id='title' name='email' placeholder='Enter Email ' required value={signUpInfo.email} onChange={onchangeHandle} />
        </div>
        <div className='fields'>
          <label htmlFor="tag">Password</label>
          <input type="Password" name="password" id="tag"  placeholder='Enter Password' required minLength={5} value={signUpInfo.password} onChange={onchangeHandle}  />
        </div>
  
        <button type='submit' className='stn-submit' >SignUp</button>
      </div>
      <h1 className='cancel-btn' onClick={goHome} >X</h1>
    </div>
    </div>
     </form>
    </div>
  )
}
