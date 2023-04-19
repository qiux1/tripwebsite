import React from 'react'
import './app.css'
import NavBar from './components/Navbar/NavBar'
import HomePage from './components/HomePage/HomePage'
import Popular from './components/Popular/Popular'
import Offers from './components/Offers/Offers'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'
import BudgetTracker from './components/BudgetTracker/BudgetTracker';
import Playground from './components/Playground/Playground'
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter'


const App = () => {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  const myObject = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
  };

  const handleClick = () =>{
    window.alert("Button Clicked");
  }

  const cards = [
    {
      title: 'Card 1',
      description: 'This is the first card',
      image: 'https://placeimg.com/640/480/tech',
    },
    {
      title: 'Card 2',
      description: 'This is the second card',
      image: 'https://placeimg.com/640/480/animals',
    },
    {
      title: 'Card 3',
      description: 'This is the third card',
      image: 'https://placeimg.com/640/480/nature',
    },
  ];

  return (
    <div>
        <NavBar/>
        <HomePage/>
        <Popular/>
        <Offers/>
        <BudgetTracker/>
        <CurrencyConverter />
        <Playground cards={cards}/>
        <About/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App