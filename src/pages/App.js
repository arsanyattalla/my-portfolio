import React from 'react';
import '../styles/App.css'
import Globe from 'react-globe.gl';
import { Menu } from '../utils/menu.js';

function App() {
  
    // Use the imported function
  
  return (
      <div >
        <header className="App-header">
          <div className='title'>
          <img className="rotating-earth" src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotating_earth_animated_transparent.gif" alt="Rotating Earth" />
          
            <h1 className="title-text">Welcome to Arsany's Portfolio</h1>
            <div classname='texts'>
            <p  >Software Engineer</p>
            </div>
          </div>
          <div>
            <Menu/>
          </div>
          
        
        </header>
      </div>
  );
}

export default App;
