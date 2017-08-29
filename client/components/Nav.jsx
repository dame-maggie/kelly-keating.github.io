import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => (
  <div className='nav-container'>
    <div id='nav-title'>Kelly Keating   \\ Web Developer</div>
    <Link to='/'><img id='nav-logo' src='http://i.imgur.com/2WYjdQt.jpg'/></Link>
    <div id='nav-buttons'>
      <Link to='/projects'><div className='nav-butt'>Projects</div></Link>
      <Link to='/about'><div className='nav-butt'>About</div></Link>
    </div>
  </div>
)

export default Nav
