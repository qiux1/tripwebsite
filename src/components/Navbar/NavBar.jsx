import React from 'react'
import './navbar.css'
import { SiYourtraveldottv } from 'react-icons/si'
const NavBar = () => {
  return (
    <section className='navBarSection'>
      <div className='header'>
        <div className='logoDiv'>
          <a href="#" className='logo'>
            <h1><SiYourtraveldottv className="icon"/>
            Dot
            </h1>
          </a>
        </div>
        <div className='navBar'>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href='#' className='navLink'>Home</a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>Products</a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>Resources</a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>Contacts</a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default NavBar
