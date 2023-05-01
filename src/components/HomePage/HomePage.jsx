import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './HomePage.scss'
import DateRangePicker  from './DateRangePicker'
import Popular from '../Popular/Popular'
import { StandaloneSearchBox } from '@react-google-maps/api';

const HomePage = ({onSearch }) => {
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [budget, setBudget] = useState('');
  const [searchBox, setSearchBox] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/map', {state:{searchParams: {location, startDate: dates.startDate, endDate: dates.endDate, budget}}})
  };

  const onPlacesChanged = () =>{
    if (searchBox) {
      const places = searchBox.getPlaces();
      if (places.length > 0){
        setLocation(places[0].formatted_address);
      }
    }
  };

  const onLoad = (ref) => {
    setSearchBox(ref);
  }

  const handleDateChange = ({ startDate, endDate }) => {
    setDates({ startDate, endDate });
  };

  return (
    <>
      <section className='home'>
        <div className='secContainer container'>
    
          <div className='homeText'>
    
            <h1 className='title'>
              Plan Your Trip with GoGoGetaway
            </h1>
    
            <p className='subTitle'>
              Get ready and plan your travel to your favorite city today!
            </p>
          </div>
        
          <form onSubmit={handleSubmit} className='homeCardGrid'>
    
            <div className='locationDiv'>
              <label htmlFor='location'>Location</label>
              <StandaloneSearchBox 
                onLoad={onLoad}
                onPlacesChanged={onPlacesChanged}>
                <input 
                  type='text' 
                  placeholder='Dream Destination'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)} />
              </StandaloneSearchBox>
              
            </div>
    
            <div className='dateDiv'>
              <DateRangePicker value={dates} onChange={handleDateChange} />
            </div>
    
            <div className='priceDiv'>
              <label htmlFor='price'>Price</label>
              <input 
                type='text' 
                placeholder='Budget' 
                value={budget}
                onChange={(e) => setBudget(e.target.value)}/>
            </div>
    
            <button className='btn' type='submit'>
              Search
            </button>
          </form>
            
        </div>
      </section>
      <div className='popular-section'>
        <Popular />
      </div>
    </>
    
  )
}

export default HomePage