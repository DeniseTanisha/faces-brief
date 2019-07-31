import React from 'react';
import Face from './component'
import './App.css';

function App() {
  return (
    <div className="APP">
        <Face leftEyeAngle={10} rightEyeAngle={20}/>
        <Face leftEyeAngle={30} rightEyeAngle={50}/>

        <p >Welcome to Shea Face</p>
    </div>
  );
}

export default App;
