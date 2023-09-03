import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DrumMachine } from './Drum Compo/Drum';
import { LandingPage } from './Landing_page_Compo/landing_page';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path ='/' element={<LandingPage/>}/>
        <Route  path = '/drum_machine' element = {<DrumMachine/>}/> 
      </Routes>
    </Router>
  );
}
export default App;