import React, { useState } from 'react';
import './signup.css';
function Signup() {
    const[formData,setFormData]= useState({
      fname:"",
      lname:"",
      email:"",
      password:""
    })
    const handleInputChange=(event)=>{
      const {name,value}=event.target
      setFormData((prevData)=>({...prevData,[name]:value}))
    }
    const handleSubmit=(event)=>{
      event.preventDefault()
      console.log(formData,"The data")
    }
  return (
    <div className='regis'>

      <form onSubmit={handleSubmit} >
        <h1>Registeration form</h1>
        <label>first name</label><br></br>
        <input type='text'name='fname' id='fname' value={formData.fname} onChange={(event)=>handleInputChange(event)}></input><br></br>
        <label>last name</label><br></br>
        <input type='text' name='lname' id='lname' value={formData.lname} onChange={(event)=>handleInputChange(event)}></input><br></br>
        <label>email</label><br></br>
        <input type='email' name='email' id='email'value={formData.email} onChange={(event)=>handleInputChange(event)}></input><br></br>
        <label>password</label><br></br>
        <input type='password' name='password' id='password' value={formData.password} onChange={(event)=>handleInputChange(event)}></input><br></br>
        <br></br>
        <input type='submit'name='submit' value='register' ></input>
      </form>
    </div>
  )
}

export default Signup
