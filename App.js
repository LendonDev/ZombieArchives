import React from 'react';
import './App.css';
import NavbarAlert from './components/NavbarAlert';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import HeroSmall from './components/HeroSmall';

function App() {
  return (
    <div>
      <header className="header">
      <NavbarAlert/>
      <Navbar/>
      <SideNav/>
      </header>
      <HeroSmall/>
    </div>
  );
}

export default App;