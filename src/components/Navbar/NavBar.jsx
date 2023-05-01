import React, {useState} from 'react';
import { Dropdown } from "react-bootstrap";
import './NavBar.scss'
import { SiYourtraveldottv } from 'react-icons/si'
import { AiFillCloseCircle } from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

import { Signup, Login } from "../Auth/Auth";
import { Modal } from "react-bootstrap";

const NavBar = ({isLogin, setIsLogin}) => {
  //code to toggle and show navbar
  const[active, setActive] = useState('navBar')
  //check if user is logged in or not
  //const[user, setUser] = useState(null);
  const showNav = () =>{
    setActive('navBar activeNavBar')
  }

  //code to remove navbar
  const removeNav=()=>{
    setActive('navBar')
  }

  //code to add background color to the header
  const [transparent, setTransparent] = useState('header')
  const addbg = () =>{
    if (window.scrollY >= 10){
      setTransparent('header activeNavBar')
    }
    else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addbg)

  // State for Login and Signup modals
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  // Functions to handle opening and closing of modals
  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleCloseSignupModal = () => setShowSignupModal(false);
  const handleShowSignupModal = () => setShowSignupModal(true);
  const handleLogin = (isLoggedIn) =>{
    setIsLogin(isLoggedIn);
  }

  const handleLogout =() =>{
    //setUser(null);
    setIsLogin(false);
  }

  return (
    <section className='navBarSection'>
      <div className={transparent}>
        <div className='logoDiv'>
          <a href="#" className='logo'>
            <h1><SiYourtraveldottv className="icon"/>
            GoGoGetaway
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href='#' className='navLink'>Home</a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>About</a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>Blog</a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>TripPlanner</a>
            </li>

            <div className="headerBtns flex">
              {!isLogin ? (
                <>
                  <button className="btn loginBtn" onClick={handleShowLoginModal}>
                    Log in
                  </button>
                  <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Login onLoginStateChange={handleLogin} />
                    </Modal.Body>
                  </Modal>

                  <button className="btn signUpBtn" onClick={handleShowSignupModal}>
                    Sign Up
                  </button>
                  <Modal show={showSignupModal} onHide={handleCloseSignupModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Sign up</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Signup onLoginStateChange={handleLogin}/>
                    </Modal.Body>
                  </Modal>
                </>
              ) : (
                <>
                  <Dropdown>
                    <Dropdown.Toggle className="btn userProfileBtn" id = "userProfileDropdown">
                      User Profile
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href='#/profile'>Profile</Dropdown.Item>
                      <Dropdown.Item href='#/pastTrips'>Past Trips</Dropdown.Item>
                      <Dropdown.Item href='#/upcomingTrips'>Upcoming Trips</Dropdown.Item>
                      <Dropdown.Item href='#/settings'>Settings</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              )}

            </div>
          </ul>

          <div onClick={removeNav} className='closeNavBar'>
            <AiFillCloseCircle className="icon"></AiFillCloseCircle>
          </div>
        </div>

        <div onClick={showNav} className='toggleNavBar'>
          <TbGridDots className='icon'/>
        </div>
      </div>
    </section>
  )
}

export default NavBar
