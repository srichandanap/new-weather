import React, { useState, useEffect } from 'react';
import './home.css';
import { NavLink, Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addWeather } from '../redux/weatherSlice'
import axios from 'axios';
import { addWeatherData } from '../redux/weatherSlice';


const Home = () => {
  const [search, setSearch] = useState('udupi');
  const [place, setPlace] = useState([]);
  const [country, setCountry] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [text, setText] = useState([]);
  const [weather, setWeather] = useState([]);
  const dispatch = useDispatch();


  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSearch(e.target.search.value);

  }

  useEffect(() => {
    dispatch(addWeatherData({
      place: place,
      country: country,
      temperature: temperature,
      text: text,
    }));
  }, [weather]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8dd658552bmsh9bf45dd766ebaf7p1140dejsn7b9c838d2044',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
  };
  const getPlaces = async (search: any) => {

    const URL = `https://yahoo-weather5.p.rapidapi.com/weather?location=${search}&format=json&u=f`;

    try {
      const response = await axios.get(URL, options);
      // console.log(response);
      return response?.data;
    }
    catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getPlaces(search)
      .then((data: any) => {
        console.log(data);
        setPlace(data && data.location && data.location.city && data.location.city);
        setCountry(data && data.location && data.location.country && data.location.country);
        setTemperature(data && data.current_observation && data.current_observation.condition && data.current_observation.condition.temperature);
        setText(data.current_observation.condition.text);
        setWeather(data && data);
        // console.log(weather);
      })
  }, [search]);

  useEffect(() => {
    dispatch(addWeather(weather));
  }, [weather]);

  return (
    <>
      <div className='mainHeader'>
        <div className="header">
          <div>
            <img src={require("../../assets/logo_web.png")} alt="image" />
          </div>
          <div className="searchBar">
            <form action="" onSubmit={handleSubmit}>
              <div className="search">
                <input type="text" className='rec' placeholder='Search city' name='search' />
                <img src={require("../../assets/search.png")} alt="image" className='searchIcon' />
              </div>
            </form>
          </div>
        </div>

      </div>


    </>
  )
}

export default Home
