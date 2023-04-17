import React from 'react'
import './Popular.scss'

import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
const Popular = () => {
  return (
    <section className='popular section container'>
      <div className='secContainer'>

        <div className='secHeader flex'>
          <div className='textDiv'>
            <h2 className='secTitle'>
              Popular Destination
            </h2>
            <p>
            Whether you're into tropical getaways, bustling cities, scenic countryside, or cultural immersion, there are plenty of highly-desired travel destinations to suit every taste and preference.
            </p>

          </div>

          <div className='iconDiv flex'>
            <BsArrowLeftShort className='icon leftIcon' />
            <BsArrowRightShort className='icon'/>
          </div>
        </div> 

        <div className='mainContent flex'>
          <div className='singleDestination'>
            <div className='desImage'>
              <img src='' alt='Image TItle'>
              
              </img>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Popular