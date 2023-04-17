import React from 'react'
import './app.css'
import NavBar from './components/Navbar/NavBar'
import HomePage from './components/HomePage/HomePage'
import Popular from './components/Popular/Popular'
import Offers from './components/Offers/Offers'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
        <NavBar/>
        <HomePage/>
        <Popular/>
        <Offers/>
        <About/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App