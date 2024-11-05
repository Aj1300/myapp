import React,{useState} from 'react'
import logo from './th.jpg'
function Amazon() {
    const [email,setemail]= useState('')
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('email:',email);
        setemail("")
    }
  return (
    <div className='main'>
        <img src={logo} alt='logo' className='logo'/>
        <form onSubmit={handleSubmit}>
            <h3>Sign in</h3><br/>
            <label><b>Email or mobile phone number</b></label>
        <input type='text' name='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
        <button >continue</button>
        <p id='terms'>By continuing, you agree to Amazon's<link>Conditions of Use</link>  and <link>Privacy Notice</link>.</p>
        <br/>
        <link>Need help?</link>
        <br/>
        <hr/>
        <b>Buying for work?</b>
        <br/>
        <link>Shop on Amazon Business</link>
        </form>
    </div>
  )
}

export default Amazon