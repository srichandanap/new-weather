import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import { NavLink, Route, Routes } from "react-router-dom";
import "./homeTab.css";
import Switch from "react-switch";
import { useSelector } from 'react-redux';

const HomeTab = () => {

  const [search, setSearch] = useState('udupi');

  // const place = useSelector((state: any) => state.weather.place)
  // const country = useSelector((state: any) => state.weather.country)

  // const weatherData = useSelector((state: any) => state.weather.addweatherData);
  const addWeather = useSelector((state: any) => state.weather.weatherData);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  }


  useEffect(() => {
    console.log(addWeather);
  }, [addWeather])

  const [fav, setFav] = useState(false)
  const [menuMobile, setMenuMobile] = useState(false)
  const [searchMobile, setSearchMobile] = useState(false)

  const [value, onChange] = useState("");
  const [time, onChangeTime] = useState("");


  const [checked, setChecked] = useState(false);
  const handleChanges = () => {
    setChecked(!checked);
  };



  const date = new Date();

  setInterval(function () {
    today();
  }, 1000);


  setInterval(function () {
    todayTime();
  }, 1000);

  const today = () => {
    onChange(
      `${date.toLocaleString("en-us", {
        weekday: "short",
      })} ${date.getDate()}, ${date.toLocaleString("en-us", {
        month: "short",
      })} ${date.getFullYear()} `
    );
  };

  const todayTime = () => {
    onChangeTime(
      ` ${date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        // second: "numeric",
        hour12: true,
      })}`
    );
  };


  const handleChange = () => {
    setFav(!fav);
  }

  let icon = ''
  switch (
  addWeather &&
  addWeather.current_observation &&
  addWeather.current_observation.condition.text
  ) {
    case 'Haze':
      icon = 'icon_mostly_sunny_small.png'
      break
    case 'Mostly Sunny':
      icon = 'icon_mostly_sunny_small.png'
      break
    case 'Sunny':
      icon = 'icon_mostly_sunny_small.png'
      break
    case 'Clear':
      icon = 'icon_mostly_sunny_small.png'
      break

    case 'Cloudy':
      icon = 'icon_mostly_cloudy_small.png'
      break
    case 'Partly Cloudy':
      icon = 'icon_partly_cloudy_small.png'
      break
    case 'Mostly Cloudy':
      icon = 'icon_mostly_cloudy_small.png'
      break

    case 'Thunderstorms':
      icon = 'icon_thunderstorm_small.png'
      break

    case 'Rainy':
      icon = 'icon_rain_small.png'
      break
    case 'Sleet':
      icon = 'icon_rain_small.png'
      break
    case ' Showers':
      icon = 'icon_rain_small.png'
      break
    default:
      icon = 'icon_rain_small.png'
      break
  }

  return (
    <>

      <div className="header_mobile">
        <div className="menu">
          <img src={require("../../assets/icon_menu_white.png")} alt="image" className='img_menu_mobile' onClick={() => setMenuMobile(true)} />
        </div>
        <div>
          <img src={require("../../assets/logo.png")} alt="image" className='img_logo_mobile' />
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <img src={require("../../assets/icon_search_white.png")} alt="image" className='img_search_mobile' onClick={() => setSearchMobile(true)} />
          </div>
        </form>
      </div>

      {menuMobile ?
        (
          <div className="sideBar">
            <div className="mobileTabs">
              <NavLink to="/" className='tab_mobile' onClick={() => setMenuMobile(false)}> Home</NavLink>
              <NavLink to="/fav" className='tab_mobile' onClick={() => setMenuMobile(false)}> Favourite</NavLink>
              <NavLink to="/recent" className='tab_mobile' onClick={() => setMenuMobile(false)}> Recent Search</NavLink>
            </div>
          </div>
        )
        :
        ""
      }
      {searchMobile ?
        (
          <div className="searchMobile">
            <div className="searchInputMobile">
              <div className="searchImageMobile">
                <img src={require("../../assets/icon_back_black.png")} alt="image" className='arrowMobile' onClick={() => setSearchMobile(false)} />
              </div>
              <input type="text" placeholder='Search for City' className='searchBarMobile' />
            </div>
          </div>
        )
        :
        ""
      }


      <div className="tabs_mobile">
        <div className="date">{value}&nbsp;&nbsp;{time}</div>
      </div>



      <div className="places">{addWeather && addWeather.location && addWeather.location.city},&nbsp;{addWeather && addWeather.location && addWeather.location.country}</div>
      <div className="image" onClick={handleChange}>
        {fav ? <img src={require("../../assets/icon_favourite_Active.png")} alt="image" className='img' /> : <img src={require("../../assets/fav_icon.png")} alt="image" className='img' />}
        <div className="favourite" style={{ color: fav ? '#FAD058' : '#FFFFFF' }}>Added to favourite</div>
      </div>

      <div className="sunnyImage">
        <img src={require(`../../assets/${icon}`)} alt="image" className='switchImage' />
        <div className="temp">
          <div className="tempCount">{addWeather && addWeather.current_observation && addWeather.current_observation.condition && addWeather.current_observation.condition.temperature}</div>
    
            <div className="switchTempature">
              <Switch
                borderRadius={4}
                onChange={handleChanges}
                checked={checked}
                className="react-switch"
                offColor="transparent"
                onColor="transparent"
                uncheckedHandleIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 18,
                      color: "red",
                    }}
                  >

                    {"\u00B0"}C

                  </div>

                }
                uncheckedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 18,
                      paddingRight: 2,
                      color: "white",
                      zIndex: "2",
                    }}
                  >
                    {"\u00B0"}F

                  </div>
                }
                checkedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 18,
                      paddingRight: 2,
                      color: "white",
                    }}
                  >
                    {"\u00B0"}C
                  </div>
                }
                checkedHandleIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      color: "red",
                      fontSize: 18,
                    }}
                  >
                    {"\u00B0"}F
                  </div>
                }

              />

            </div>
        
        </div>
        <div className="text">{addWeather && addWeather.current_observation && addWeather.current_observation.condition && addWeather.current_observation.condition.text}</div>
      </div>
      <Footer />


    </>
  )
}

export default HomeTab