import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => (
  <div className='nav-container'>
    <Link to='/'><img id='nav-logo' src='http://i.imgur.com/2WYjdQt.jpg'/>Kelly Keating</Link>
    <Link to='/projects'><div className='nav-butt'>Projects</div></Link>
    <Link to='/about'><div className='nav-butt'>About</div></Link>
  </div>
)

export default Nav
