import React from 'react'
import './Popular.scss'

import {BsDot, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'

import Tokyo from '../../assets/Tokyo.jpg'
import Shanghai from '../../assets/Shanghai.jpg'
import London from '../../assets/London.jpg'
import Paris from '../../assets/Paris.jpg'
import Chongqing from '../../assets/Chongqing.jpg'
import NewYork from '../../assets/NewYork.jpg'

//right now I will create a map for all the destination for
//temp value. Later on, I will connect the app with mongoDB
//To be able to retrive the data from the db instead hard code it

const Data = [
  {
    id: 1,
    imgSrc:Shanghai,
    destTitle: 'Shanghai',
    Country: 'China',
    Description:'Shanghai, a vibrant Chinese metropolis, boasts futuristic skyscrapers, rich history, bustling markets, diverse cuisine, and a unique fusion of East-meets-West culture. '
  },

  {
    id: 2,
    imgSrc:Chongqing,
    destTitle: 'Chongqing',
    Country: 'China',
    Description:'Chongqing, a sprawling Chinese city, features steep hills, a foggy skyline, spicy Sichuan cuisine, intriguing history, and the impressive Yangtze River.'
  },
  
  {
    id: 3,
    imgSrc:Paris,
    destTitle: 'Paris',
    Country: 'France',
    Description:'Paris, the capital of France, is a city renowned for its stunning architecture, rich history, delicious cuisine, and romantic ambiance.'
  },
  
  {
    id: 4,
    imgSrc:London,
    destTitle: 'London',
    Country: 'England',
    Description:'London, the capital of England, is a diverse and vibrant city, famous for its iconic landmarks, museums, theaters, and bustling streets.'
  },
  
  {
    id: 5,
    imgSrc:NewYork,
    destTitle: 'NewYork',
    Country: 'USA',
    Description:'New York City, the largest city in the United States, is a global hub of culture, finance, fashion, and entertainment.'
  },
  
  {
    id: 6,
    imgSrc:Tokyo,
    destTitle: 'Tokyo',
    Country: 'Japan',
    Description:'Tokyo is a vibrant and bustling metropolis in Japan, known for its neon lights, cutting-edge technology, and rich cultural traditions.'
  },
]

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

        <div className='mainContent grid'>
          {
            Data.map(({id, imgSrc, destTitle, Country, Description}) =>{
              return(
                <div className='singleDestination'>
                  <div className='desImage'>
                    <img src={imgSrc} alt='Image Title' />

                    <div className='overlayInfo'>
                      <h3>{destTitle}</h3>
                      <p>{Description}</p>

                      <BsArrowRightShort className='icon'/>
                    </div>

                  </div>

                  <div className='destFooter'>
                    <div className='number'>
                      0{id}
                    </div>

                    <div className='destText flex'>
                      <h6>
                        {Country}
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
              )
            })
          }
        </div>
      </div>

    </section>
  )
}

export default Popular