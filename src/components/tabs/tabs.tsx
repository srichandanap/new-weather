import React, { useState } from 'react'
import { NavLink, Route, Routes } from "react-router-dom";
import Favourite from '../favourite/favourite';
import RecentSearch from '../recentSearch/recentSearch';
import HomeTab from '../homeTab/homeTab';
import './tabs.css';

const Tabs = () => {
  const [value, onChange] = useState("");
  const [time, onChangeTime] = useState("");

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

  return (
    <div>
      <div className="tabItems">
        <div className="tabs">
          <div className='tabLink'>
            <NavLink to="/" className='tab'> Home</NavLink>
            <NavLink to="/fav" className='tab'> Favourite</NavLink>
            <NavLink to="/recent" className='tab'> Recent Search</NavLink>

          </div>
          <div className="date">{value}&nbsp;&nbsp;{time}</div>
        </div>
      </div>


      <Routes>
        <Route path="/" element={<HomeTab />} />
        <Route path="/fav" element={<Favourite />} />
        <Route path="/recent" element={<RecentSearch />} />
      </Routes>
    </div>
  )
}

export default Tabs