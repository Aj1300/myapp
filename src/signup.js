import React from 'react'
import './signup.css'
function signup() {
    
  return (
    <div className='regis'>

      <form >
        <h1>Registeration form</h1>
        <label>first name</label><br></br>
        <input type='text'name='fname' id='fname'></input><br></br>
        <label>last name</label><br></br>
        <input type='text' name='lname' id='lname'></input><br></br>
        <label>email</label><br></br>
        <input type='email' name='email' id='email'></input><br></br>
        <label>password</label><br></br>
        <input type='password' name='password' id='password'></input><br></br>
        <br></br>
        <input type='submit'name='submit' value='register' onClick="register()"></input>
      </form>
    </div>
  )
}

export default signup
