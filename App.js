import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSmall from './components/HeroSmall';

function App() {
  return (
      <body>
        <header className="header">
          <Navbar/> 
        </header>
          <HeroSmall/>

      </body>
  );
}

export default App;
