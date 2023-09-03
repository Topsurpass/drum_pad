import React from 'react'
import './form.css';

export const Form = () => {
  return (
    <div className='ClientContact'>
        <form name='Contact_me' action='' method='post'>
            <input type='text' name='Name' placeholder='Name' className='register' id='myname'  required />
            <input type='email' name='email' placeholder='Email' required className='register' id='myemail'/>
            <br/>
            <textarea placeholder='Message' className='messg' id='mymessage'></textarea> 
            <div className='submitForm'>
                <input type='submit' value='Send' className='submit' id='CardSubmitted' />          
            </div>             
        </form>
    </div>
    
  )
}