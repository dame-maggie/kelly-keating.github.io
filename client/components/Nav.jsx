import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => (
  <div className='nav-container'>
    <Link to='/projects'><div className='nav-butt'>Projects</div></Link>
    <Link to='/about'><div className='nav-butt'>About</div></Link>
  </div>
)

export default Nav
