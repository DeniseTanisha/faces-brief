import React from 'react';
import Face from './component'
import './App.module.scss';

function App() {
  return (
    <div class="App">

       <div >
          <h1 >Welcome to Shea Face</h1>
        </div>
        
        <section>
         <Face leftEyeAngle={10} rightEyeAngle={80}/>
         <Face leftEyeAngle={90} rightEyeAngle={10}/>
         <Face leftEyeAngle={130} rightEyeAngle={90}/>
       </section>
        
        
    </div>
  );
}

export default App;
