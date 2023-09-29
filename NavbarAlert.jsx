import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

function NavbarAlert() {
  return (
      <div className="navbar-alert">
        <p>IMPORTANT UPDATE: This website is a work-in-progress, it will take time...</p>
        <button style={{marginLeft : 60}}>
        <CloseIcon />
        </button>
      </div>
  );
}

export default NavbarAlert;