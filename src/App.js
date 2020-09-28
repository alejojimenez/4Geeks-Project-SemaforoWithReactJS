//import React from 'react';
import React, { useState } from 'react';
import './App.css';

function App() {

  //State
  const [ color, setColor ] = useState('');
  
  return (
      <>
      <div className = "supportTop"></div>
      
      <div className = "container">
        <div className = "trafficControl">
          <div onClick = { () => setColor('red')} className = {`redLight ${ color === "red" ? "shadow" : "" } `}>
          </div>
          <div onClick = { () => setColor('yellow')} className = {`yellowLight ${ color === "yellow" ? "shadow" : "" } `}>
          </div>
          <div onClick = { () => setColor('green')} className = {`greenLight ${ color === "green" ? "shadow" : "" } `}>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
