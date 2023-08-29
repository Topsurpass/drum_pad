import React from 'react'
import './recordSound.css'

export const RecordSound = (props) => {
  return (
    <div className='container'>
        <button className='play' onClick={()=>{props.playRecord()}}>Play</button>
        <button className='stop' onClick={()=>{props.stopRecord()}}>Stop</button>  
        <button className='del' onClick={()=>{props.clearRecording()}}>Delete</button>                   
    </div>
  )
}
