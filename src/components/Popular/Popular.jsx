import React from 'react'
import './Popular.scss'

import {BsDot, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'

import img from '../../assets/image5.jpg'


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
              <img src={img} alt='Image TItle' />
              
              <div className='overlayInfo'>
                <h3>Title holder</h3>
                <p>Text holder</p>

                <BsArrowRightShort className='icon'/>
              </div>

            </div>

            <div className='destFooter'>
              <div className='number'>
                01
              </div>

              <div className='destText flex'>
                <h6>
                  city
                </h6>
                <span className='flex'>
                  <span className='dot'>
                    <BsDot className='icon'/>
                  </span>
                  GoGoGetaway
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Popular