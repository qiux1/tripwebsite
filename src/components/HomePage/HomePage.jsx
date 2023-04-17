import React from 'react'
import './HomePage.scss'
import DateRangePicker  from './DateRangePicker'

const HomePage = () => {
  return (
    <section className='home'>
      <div className='secContainer container'>

        <div className='homeText'>

          <h1 className='title'>
            Plan Your Trip with GoGoGetaway
          </h1>

          <p className='subTitle'>
            Get ready and plan your travel to your favorite city today!
          </p>

          <button className='btn'>
            <a href='#'>Explore now</a>
          </button>
        </div>
      
        <div className='homeCardGrid'>

          <div className='locationDiv'>
            <label htmlFor='location'>Location</label>
            <input type='text' placeholder='Dream Destination'></input>
          </div>

          <div className='dateDiv'>
            <DateRangePicker />
          </div>

          <div className='priceDiv'>
            <label htmlFor='price'>Price</label>
            <input type='text' placeholder='$140-$500'></input>
          </div>

          <button className='btn'>
            Search
          </button>
        </div>

        </div>
    </section>
  )
}

export default HomePage