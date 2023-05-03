import React, {useState, useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import './Popular.scss'
import Slider from 'react-slick';
import SearchBar from '../SearchBar/SearchBar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {BsDot, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'


const Popular = () => {
  const navigate = useNavigate();

  const settings ={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow : 1,
    slidesToScroll: 1,
    nextArrow : <BsArrowRightShort  className='icon'/>,
    prevArrow : <BsArrowLeftShort  className='icon leftIcon'/>,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow :2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow :1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [cityData, setCityData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/cities');
        const data = await response.json();
        console.log('Fetched city data:', data); // Add this line
        setCityData(data);
        setFilterData(data);
      } catch (error) {
        console.error('Error fetching city data:', error);
      }
    };
  
    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    const term = searchTerm.toLowerCase();
    const newData = cityData.filter(
      ({ destTitle, Country, Description }) =>
        destTitle.toLowerCase().includes(term) ||
        Country.toLowerCase().includes(term) ||
        Description.toLowerCase().includes(term)
    );
    setFilterData(newData);
  };

  const handleDestinationClick = (cityName) => {
    navigate(`/destination/${cityName}`);
  };

  return (
    <section className='popular section container'>
      <div className='secContainer'>
        <SearchBar onSearch={handleSearch} />
        <div className='secHeader flex'>
          <div className='textDiv'>
            <h2 className='secTitle'>
              Popular Destination
            </h2>
            <p>
              Whether you're into tropical getaways, bustling cities, scenic countryside, or cultural immersion, there are plenty of highly-desired travel destinations to suit every taste and preference.
            </p>

          </div>
        </div> 

        <div className='mainContent'>
          <Slider {...settings}>
          {
            filterData.map(({id, imgSrc, destTitle, country, description}) =>{
              return(
                <div className='singleDestination' key={id}>
                  <div className='desImage'>
                    <img src={process.env.PUBLIC_URL + imgSrc} alt="Image Title" />

                    <div className='overlayInfo'>
                      <h3>{destTitle}</h3>
                      <p>{description}</p>

                      <button onClick={() => handleDestinationClick(destTitle)}>
                        <BsArrowRightShort className='icon'/>
                      </button>
                    </div>
                  </div>

                  <div className='destFooter'>
                    <div className='number'>
                      0{id}
                    </div>

                    <div className='destText flex'>
                      <h6>
                        {country}
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
          </Slider>
          
        </div>
      </div>

    </section>
  )
}

export default Popular