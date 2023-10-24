import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar__container'>
      <div className='navbar__title'>E-Cube</div>
      <div className='text__container'>
        <input type='text' placeholder='search' className='textbox' />
      </div>
    </div>
  );
}

export default Navbar;
