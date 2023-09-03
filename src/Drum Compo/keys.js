import React from 'react'
import Button from 'react-bootstrap/Button';
import './keys.css';

export const Keys = (props) => {

  return (
    <div className="drum-container">
        <div className='bothButtons' id="bank1But" >
            {props.arrBank1.map(i=>{
                return <div key={i.value}>
                    <Button id='button1' className="button"  onClick={()=>{props.handlePlay(i.value,i.id);
                        props.mouseVol(i.value); props.saveRecord(i.url)}} > {i.value}</Button>
                    <audio src={i.url} id={i.value}></audio>
                </div> 
            })}
        </div>
        
        <div className='bothButtons' id="bank2But" style={{display:"none"}}>
            {props.arrPiano.map(j=>{                  
                return <div key={j.value}>
                    <Button id='button2' className="button"   onClick={()=>{props.handlePlay(j.url,j.id); 
                        props.mouseVol(j.url); props.saveRecord(j.url)}} > {j.value}</Button>
                    <audio src={j.url} id={j.url}></audio>                
                </div>                   
            })}
        </div>
    </div>
  )
}
