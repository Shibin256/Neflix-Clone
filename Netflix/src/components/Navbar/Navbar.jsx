import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profileIcon from '../../assets/profile_img.png'
import caretIcon from '../../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Navbar-left'>
        <img src={logo} alt="" className='mainLogo'/>
        <ul>
              <li>Home</li>
              <li>Tv Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My lists</li>
              <li>Browse by Language</li>

            </ul>
      </div>
      <div className='Navbar-right'>
            <img src={searchIcon} alt="" className='icons'/>     
            <p>Children</p>     
            <img src={bellIcon} alt="" className='icons'/>     
            <div className='Navbar-Profile'>
              <img src={profileIcon} alt="" className='profile'/>                 
              <img src={caretIcon} alt=""/>     
              <div className='dropdown'>
                  <p>Sign Out of Netflix</p>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Navbar
