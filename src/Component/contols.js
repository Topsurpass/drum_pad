import React from 'react'
import './controls.css'

export const Controls = (props)=> {

    return (
        <div className='drumControls'>

            <br/><br/> 
            <h3 id='switch'>OFF</h3> 

            <label className='switch'>
                <input type='checkbox' onClick={()=> {props.handleSwitch()}} />
                <span className='slider'/>
            </label>

            <br/><br/>

            <div id="display">Kicks</div>

            <div className='slideContainer'>
                <input type='range' min="0" max="100" className='slide' id='volume' onChange={()=>props.handleVolDisplay()} />
            </div>

            <br/>
            <h3>Switch Sound</h3> 

            <label className='switch'>
                <input type='checkbox' onClick={()=>props.handleBankSwitch()} />
                <span className='slider' />
            </label>

            <br/>
        </div>
    )
}
