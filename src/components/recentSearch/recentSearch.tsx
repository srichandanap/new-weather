import React, { useState } from 'react'
import "../favourite/favourite.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteData } from '../redux/weatherSlice';

const RecentSearch = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recentData = JSON.parse(window.localStorage.getItem("data") || "[]");

  // console.log(recentData);

  // const [elements, setElements] = useState(false)

  // if weatherData!= [] && 

  let icon = '';
  switch (
  recentData &&
  recentData.current_observation &&
  recentData.current_observation.condition.text
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
      <div className="searchFavMobile">
        <div className="favMobileLeft">
          <div className="favMobileImage">
            <img src={require("../../assets/icon_back_black.png")} alt="image" className='arrowFavMobile' onClick={() => navigate('/')} />
          </div>
          <div className="favMobileText">Recent Search</div>

        </div>
        <div className="favMobileRight">
          <img src={require("../../assets/searchMobile.png")} alt="image" className='searchFavImageMobile' />
        </div>
      </div>

      {(recentData.length === 0) ?
        (<div className="favImage">
          <img src={require("../../assets/icon_nothing.png")} alt="image" />
          <div className="text">No Recent Search</div>
        </div>)
        :
        (

          <div className="favPlaceList">
            <div className="favText">
              <div className="favTextLeft">You recently searched for</div>
              <div className="favTextRight" onClick={() => dispatch(deleteData(recentData))} >Clear All</div>
            </div>
            <div className="favPlaces">
              {recentData.reverse().map((data: any, i: any) => {

                return (<>
                  {JSON.stringify(data.place) !== '[]' && <div className="favPlaceItem">

                    <div className="place">
                      {data && data.place}, {data && data.country}
                    </div>
                    <div className="placeTemp">

                      <div className="placeImage">
                        <img src={require(`../../assets/${icon}`)} alt="image" />
                      </div>
                      <div className="celFlex">
                        <div className="temp">{data && data.temperature}</div>
                        <div className="cel">{"\u00B0"}c</div>
                      </div>
                      <div className="condition">{data && data.text}</div>


                    </div>
                    <div className="placeImage">
                      <img src={require("../../assets/icon_favourite_Active.png")} alt="image" />
                    </div>
                  </div>}</>
                )
              })}

              {recentData.map((data: any, i: any) => {

                return (<>
                  {JSON.stringify(data.place) !== '[]' && <div className="favPlaceMobileItem">

                    <div className="favMobileDetails">
                      <div className="placeMobile">
                        {data && data.place}, {data && data.country}
                      </div>
                      <div className="placeTempMobile">

                        <div>
                          <img src={require(`../../assets/${icon}`)} alt="image" className="placeImageMobile" />
                        </div>
                        <div className="celFlexMobile">
                          <div className="tempMobile">{data && data.temperature}</div>
                          <div className="celMobile">{"\u00B0"}c</div>
                        </div>
                        <div className="conditionMobile">{data && data.text}</div>

                      </div>
                    </div>
                    <div className="placeFavImageMobile">
                      <img src={require("../../assets/icon_favourite_Active.png")} alt="image" />
                    </div>
                  </div>}</>
                )
              })}

            </div>
          </div>
        )
      }

    </>
  )
}

export default RecentSearch