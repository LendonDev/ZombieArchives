import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';

function Navbar() {
  return (
      <nav className="navbar-main">
        <ul className="navbar-main__list">
          <li className="navbar-main__list-item list-item__menu-button">
          <button className="navbar__button">
          <MenuIcon/>
        </button>
          </li>
          <li className="navbar-main__list-item list-item__menu-logo">
          <img src="#.jpg"></img>
          </li>
          <li className="navbar-main__list-item list-item__menu-item">
            <a className="navbar-main__link"href="/#">
              <div className="list-item__menu-item-inner">About</div>
            </a>
          </li>
          <li className="navbar-main__list-item list-item__menu-item">
            <a className="navbar-main__link"href="/#">
              <div className="list-item__menu-item-inner">News</div>
            </a>
          </li>
          <li className="navbar-main__list-item list-item__menu-item">
            <a className="navbar-main__link"href="/#">
              <div className="list-item__menu-item-inner">Archives</div>
            </a>
          </li>
          <li className="navbar-main__list-item list-item__menu-item">
            <a className="navbar-main__link"href="/#">
              <div className="list-item__menu-item-inner">Partners</div>
            </a>
          </li>
          <li className="navbar-main__list-item list-item__menu-item">
            <a className="navbar-main__link"href="/#">
              <div className="list-item__menu-item-inner">Submit Game</div>
            </a>
          </li>
          </ul>
          <div className="navbar-main__list-item list-item__menu-button">
            <button className="navbar__button"style={{width:100}}>
              <ArrowDropDownIcon/>
              <PersonIcon/>
            </button>
          </div>
      </nav>
  );
}

export default Navbar;