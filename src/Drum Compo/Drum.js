import 'bootstrap/dist/css/bootstrap.min.css';
import './drum.css';
import Container from 'react-bootstrap/Container';
import { Controls } from './contols';
import {useSelector} from 'react-redux';
import { useState, useEffect} from 'react';
import { Keys } from './keys';
import { RecordSound } from './recordSound';


export const DrumMachine = () =>{
    
   const arrBank1 = useSelector((state)=>state.playNow.map(loop=>loop));
   const arrPiano = useSelector((state)=>state.playPiano.map(loop=>loop));
   const [switchOn, switchOff] = useState(false);
   const [bank, setBank] = useState(false);
   
   const record = [];
   let audElement = null;

   useEffect(()=>{
        function handle(event){
            if (bank===false){
                 arrBank1.map(keys2=>{
                    for (let i = 0; i < keys2["value"].length; i++){                          
                        if ((event.key.toUpperCase() === keys2["value"][i])){     
                            handlePlay(keys2["value"], keys2["id"]);
                            saveRecord(keys2["url"]);
                        }
                        return mouseVol(keys2["value"][i])                
                    }return  []  
                })
            }else{
                arrPiano.map(keys=>{
                    for (let i = 0; i < keys["value"].length; i++){
                        if ((event.key.toUpperCase() === keys["value"][i])){                 
                            handlePlay(keys["url"], keys["id"]);
                            saveRecord(keys["url"]);
                        }
                        return mouseVol(keys["url"])
                    }return []
                }) 
            }
        }
        
            document.addEventListener("keydown", handle);
        return ()=>{
            document.removeEventListener("keydown", handle);  
        }
    })

    const mouseVol = (loopId) =>{
        const a = document.getElementById("volume").value;
         document.getElementById(loopId).volume= (a/100);
    }
    //This function handles the display of the volume value
    const handleVolDisplay = () =>{
        const b = document.getElementById("volume").value;
        document.getElementById("display").innerText= `Volume: ${b}%`;
    }

    //This function changes or handles the bank switch toggle from drum kicks to piano
    const handleBankSwitch = () =>{
        setBank(!bank);
            if(bank===false){
                document.getElementById("bank1But").style.display="none";
                document.getElementById("bank2But").style.display="grid";
                document.getElementById("display").innerText= "Piano";
            }else{
                document.getElementById("bank1But").style.display="grid";
                document.getElementById("bank2But").style.display="none";
                document.getElementById("display").innerText= "Kicks";
            }
            record.splice(0, record.length);
    }

   //This function handles the playing of the audios
    const handlePlay = (playId, showId) =>{
        if (switchOn === true){
            document.getElementById(playId).play();
            document.getElementById("display").innerText= showId;
        } 
    }

   //This function handles the display of the switch toggle
    const handleSwitch = () =>{
        switchOff(!switchOn);
        if (switchOn === true) {
            record.splice(0, record.length);
            document.getElementById("switch").innerText = "OFF";
        } else {
            document.getElementById("switch").innerText = "ON";
        }
    }

    //This function saves each audio url of each button pressed
    const saveRecord = (url) =>{
        switchOn === true ? record.push(url) : record.splice(0, record.length);
    }

    //This function plays the audio url saved in record array
    const playRecord = () =>{
        if (switchOn) {
            let idx = 0;
            const playNextnLoop = () =>{
                if (idx < record.length) {
                    audElement = new Audio(record[idx]);
                    const a = document.getElementById("volume").value;
                    audElement.volume = (a/100);
                    audElement.play();
                    audElement.onended = () =>{
                        idx = (idx + 1) % record.length;
                        setTimeout(playNextnLoop, 100);
                    };
                }
            };
            playNextnLoop();
        }
    }
    
    //This stops the currently audio recorded
    const stopRecord = () =>{
        if (audElement) {
            audElement.pause();
            audElement.currentTime = 0;
        }
    }
    //This clears the audios in the array
    const clearRecording = () =>{
        record.splice(0, record.length);
    }
    
    return(
        
        <Container fluid className='bigContainer'>
            <div  className='whitebg'>
                <Keys arrBank1={arrBank1}
                    arrPiano={arrPiano}
                    handlePlay={handlePlay}
                    mouseVol={mouseVol}
                    saveRecord={saveRecord}/>
                <Controls handleSwitch={handleSwitch} 
                    handleBankSwitch={handleBankSwitch}
                    handleVolDisplay={handleVolDisplay}
                    switchOn={switchOn}/> 
            </div>
            <RecordSound playRecord={playRecord}
                stopRecord={stopRecord}
                clearRecording={clearRecording}/>
   
        </Container>
    )
}