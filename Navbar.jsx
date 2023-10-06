import React from "react";
import {useEffect, useRef, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import LogoImg from '../temp-logo.png';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import GroupsIcon from '@mui/icons-material/Groups';
import ShieldIcon from '@mui/icons-material/Shield';
import ForumIcon from '@mui/icons-material/Forum';
import ConstructionIcon from '@mui/icons-material/Construction';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import TheatersIcon from '@mui/icons-material/Theaters';
import GradingIcon from '@mui/icons-material/Grading';

function Navbar() {

  const [isActive, setActive] = useState("false");

  function handleClick(){

    if (isActive02 == false) {
      setActive (isActive => !isActive);
      setActive02 (isActive02 => true)
    }
    else
      setActive (isActive => !isActive);
  }

  let setActiveCheck = !isActive;

  if (isActive == false) {
    document.body.style.overflowY = "hidden";
  }
  else {
    document.body.style.overflowY = "visible";
  }

  const [isActive02, setActive02] = useState("false");

  function handleClick02(){

    if (isActive == false) {
      setActive02 (isActive02 => !isActive02);
      setActive (isActive => true)
    }
    else
      setActive02 (isActive02 => !isActive02);
  }

  let setActiveCheck02 = !isActive02;

  if (isActive02 == false) {
    document.body.style.overflowY = "hidden";
  }
  else {
    document.body.style.overflowY = "visible";
  }

  return (
      <nav className="navbar-main">
        <ul className="navbar-main__list">
          <li className="navbar-main__list-item list-item__menu-button">
          <button onClick={handleClick}className={`navbar__button${setActiveCheck ? ' active' : ''}`}>
          <MenuIcon/>
          </button>
          </li>
          <a className="navbar-main__link"href="/#"style={{marginLeft: '32px',marginRight: '32px'}}>
            <li className="navbar-main__list-item list-item__menu-logo">
              <img src={LogoImg} className="App-logo" alt="logo" style={{width:140}}/>
            </li>
          </a>
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
              <div className="list-item__menu-item-inner">Submit Game<ArrowOutwardIcon/></div>
            </a>
          </li>
          <div className="navbar-main__list-item list-item__manage-button">
            <button onClick={handleClick02}className={`navbar__button${setActiveCheck02 ? ' active' : ''}`}style={{width:"6.25rem"}}>
              <ArrowDropDownIcon/>
              <PersonIcon/>
            </button>
          </div>
          </ul>
          <div className="navbar-links">
            <div className="navbar-links__item">
              <p>Connect with us:</p>
            </div>
            <a className='navbar-main__link'href="/#">
              <div className="navbar-links__item">
                <YouTubeIcon/>
              </div>
            </a>
            <a className='navbar-main__link'href="/#">
              <div className="navbar-links__item">
                <TwitterIcon/>
              </div>
            </a>
            <a className='navbar-main__link'href="/#">
              <div className="navbar-links__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                </svg>
              </div>
            </a>
            <a className='navbar-main__link'href="/#">
              <div className="navbar-links__item">
                <EmailIcon/>
              </div>
            </a>
          </div>

          <div className="side-nav-main">
          <div onClick={handleClick}className={`side-nav-main__background${setActiveCheck ? ' active' : ''}`}/>
          <div className={`side-nav-main__inner${setActiveCheck ? ' active' : ''}`}>
            <ul className="side-nav-main__inner-list">





            <div className="side-nav-main__inner-list-item-title">Main Menu</div>

              <div className="side-nav-main-inner-list-container">

            <a className="navbar-main__link"href="#">
              <li className="side-nav-main__inner-list-item">
                <div className="side-nav-main__inner-list-item-icon"><ArticleIcon/></div>
                <div className="side-nav-main__inner-list-item-subtitle">About</div>
              </li>
            </a>

            <a className="navbar-main__link"href="#">
              <li className="side-nav-main__inner-list-item">
                <div className="side-nav-main__inner-list-item-icon"><AnnouncementIcon/></div>
                <div className="side-nav-main__inner-list-item-subtitle">News</div>
              </li>
            </a>

            <a className="navbar-main__link"href="#">
              <li className="side-nav-main__inner-list-item">
                <div className="side-nav-main__inner-list-item-icon"><AnalyticsIcon/></div>
                <div className="side-nav-main__inner-list-item-subtitle">Archives</div>
              </li>
            </a>

            <a className="navbar-main__link"href="#">
              <li className="side-nav-main__inner-list-item">
                <div className="side-nav-main__inner-list-item-icon"><HandshakeIcon/></div>
                <div className="side-nav-main__inner-list-item-subtitle">Partners</div>
              </li>
            </a>

            <a className="navbar-main__link"href="#">
              <li className="side-nav-main__inner-list-item">
                <div className="side-nav-main__inner-list-item-icon"><LocalFireDepartmentIcon/></div>
                <div className="side-nav-main__inner-list-item-subtitle">Submit Game<ArrowOutwardIcon/></div>
              </li>
            </a>
              </div>





            <div className="side-nav-main__inner-list-item-title">Community</div>

            <div className="side-nav-main-inner-list-container">

            <a className="navbar-main__link"href="#">
              <li className="side-nav-main__inner-list-item">
                <div className="side-nav-main__inner-list-item-icon"><GroupsIcon/></div>
                <div className="side-nav-main__inner-list-item-subtitle">Profiles</div>
              </li>
            </a>

            <a className="navbar-main__link"href="#">
              <li className="side-nav-main__inner-list-item">
                <div className="side-nav-main__inner-list-item-icon"><ShieldIcon/></div>
                <div className="side-nav-main__inner-list-item-subtitle">Site Staff</div>
              </li>
            </a>

            <a className="navbar-main__link"href="#">
              <li className="side-nav-main__inner-list-item">
                <div className="side-nav-main__inner-list-item-icon"><ForumIcon/></div>
                <div className="side-nav-main__inner-list-item-subtitle">Forums</div>
              </li>
            </a>

            <a className="navbar-main__link"href="#">
              <li className="side-nav-main__inner-list-item">
                <div className="side-nav-main__inner-list-item-icon"><TwitterIcon/></div>
                <div className="side-nav-main__inner-list-item-subtitle">Twitter</div>
              </li>
            </a>

            <a className="navbar-main__link"href="#">
            <li className="side-nav-main__inner-list-item">
                <div className="side-nav-main__inner-list-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                  </svg>
                </div>
                <div className="side-nav-main__inner-list-item-subtitle">Discord</div>
              </li>
            </a>

            </div>

            <div className="side-nav-main__inner-list-item-title">Tools & More</div>

            <div className="side-nav-main-inner-list-container">

              <a className="navbar-main__link"href="#">
                <li className="side-nav-main__inner-list-item">
                  <div className="side-nav-main__inner-list-item-icon"><ConstructionIcon/></div>
                  <div className="side-nav-main__inner-list-item-subtitle">Site Development</div>
                </li>
              </a>

              <a className="navbar-main__link"href="#">
                <li className="side-nav-main__inner-list-item">
                  <div className="side-nav-main__inner-list-item-icon"><QueryStatsIcon/></div>
                  <div className="side-nav-main__inner-list-item-subtitle">Site Stats</div>
                </li>
              </a>

              <a className="navbar-main__link"href="#">
                <li className="side-nav-main__inner-list-item">
                  <div className="side-nav-main__inner-list-item-icon"><VolunteerActivismIcon/></div>
                  <div className="side-nav-main__inner-list-item-subtitle">Donate</div>
                </li>
              </a>

              <a className="navbar-main__link"href="#">
                <li className="side-nav-main__inner-list-item">
                  <div className="side-nav-main__inner-list-item-icon"><TheatersIcon/></div>
                  <div className="side-nav-main__inner-list-item-subtitle">Credits</div>
                </li>
              </a>

              <a className="navbar-main__link"href="#">
                <li className="side-nav-main__inner-list-item">
                  <div className="side-nav-main__inner-list-item-icon"><GradingIcon/></div>
                  <div className="side-nav-main__inner-list-item-subtitle">Legal</div>
                </li>
              </a>


            </div>

            <div className="side-nav-main__inner-list-footer-container">
              <div style={{justifyContent:"Center"}}className="side-nav-main__inner-list-item-title">Socials:</div>
                <div className="side-nav-main__inner-list-footer-content">
                  <a className="navbar-main__link"href="/#">
                    <div className="side-nav-main__inner-list-footer-item">
                      <YouTubeIcon/>
                    </div>
                  </a>
                  <a className="navbar-main__link"href="/#">
                    <div className="side-nav-main__inner-list-footer-item">
                      <TwitterIcon/>
                    </div>
                  </a>
                  <a className="navbar-main__link"href="/#">
                    <div className="side-nav-main__inner-list-footer-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                      <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                      </svg>
                    </div>
                  </a>
                <a className="navbar-main__link"href="/#">
                  <div className="side-nav-main__inner-list-footer-item">
                    <EmailIcon/>
                  </div>
                </a>
              </div>
            </div>
          </ul>
          
        </div>
      </div>
            
<div className={`account-nav-main${setActiveCheck02 ? ' active' : ''}`}>

    <div onClick={handleClick02}className={`account-nav-main__background${setActiveCheck02 ? ' active' : ''}`}/>

    <div className={`account-nav-main__inner${setActiveCheck02 ? ' active' : ''}`}>

    </div>
</div>










</nav>
  );
}

export default Navbar;
