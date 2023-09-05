import React from 'react'
import './form.css';

export const Form = (props) => {

  return (
    <div className='ClientContact'>
        <form name='Contact_me' onSubmit={props.nowSubmit}>
            <input type='text' name='Name' placeholder='Name' className='register' id='myname'  required value={props.myname} onChange={props.changeName}/>
            <input type='email' name='email' placeholder='Email' required className='register' id='myemail' value={props.myemail} onChange={props.changeEmail}/>
            <br/>
            <textarea placeholder='Message' name='message' className='messg' id='mymessage' value={props.mytext} onChange={props.changeMytext}></textarea> 
            <div className='submitForm'>
                <input type='submit' value='Send' className='submit' id='CardSubmitted' />          
            </div>             
        </form>
    </div>
    
  )
}