import React from 'react';
import {RiMenu3Line, RiCLoseLin} from 'react-icons';
import logo from '../../assets/logo.svg';
import './navbar.css';


//BEM -> Block Element Modifier
export const Navbar = () => {
  return (
    <div className= 'gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src = {logo} alt = "Logo" />
        </div>

      </div>
    </div>
  )
}

export default Navbar