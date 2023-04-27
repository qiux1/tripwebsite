import React from 'react';
import './MapPage.scss';
import { useLocation } from 'react-router-dom';
import { GoogleMap, LoadScript} from '@react-google-maps/api';
import DateRangePicker from '../HomePage/DateRangePicker';
import { useState } from 'react';

const MapPage=() => {
    const mapStyles = {
        height: '100vh',
        width: '75%',
        position: 'absolute',
        left: 0.
    };

    const defaultCenter = {
        lat: 47.444,
        lng: -122.176,
    };

    const location = useLocation();
    const initialSearchParams = location.state.searchParams;

    const [searchParams, setSearchParams] = useState(initialSearchParams);

    const handleChange = (e) =>{
        setSearchParams({
            ...searchParams,
            [e.target.name]: e.target.value,
        });
    };

    const handleDateChange= (newDate) => {
        setSearchParams({
            ...searchParams,
            startDate: newDate.startDate,
            endDate: newDate.endDate,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.reload();
    }
    return(
        <div className='mapPage'>
            <h1>Map Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='location'>Location:</label>
                <input
                    type='text'
                    name='location'
                    value={searchParams.location}
                    onChange={handleChange}
                />

                <label htmlFor='dates'>Dates:</label>
                <DateRangePicker value={{startDate : searchParams.startDate, endDate: searchParams.endDate}} onChange={handleDateChange} />

                <label htmlFor='budget'>Budget:</label>
                <input
                    type='text'
                    name='budget'
                    value={searchParams.budget}
                    onChange={handleChange}
                />

                <button type='submit'>Update</button>
            </form>
            <LoadScript googleMapsApiKey='AIzaSyBbCqrgPzLvpNAC815GPVNygWXVw5IGojQ'>
                <GoogleMap
                    className='google-map'
                    mapContainerStyle={mapStyles}
                    zoom={14}
                    center={defaultCenter}/>
            </LoadScript>
        </div>
    );
};

export default MapPage;