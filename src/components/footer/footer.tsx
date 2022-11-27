import React from 'react'
import "./footer.css"
import { useSelector } from 'react-redux';

const Footer = () => {

    const weatherData = useSelector((state: any) => state.weather.weatherData);
    // console.log(weatherData);

    return (
        <div>
            <footer className='footer'>

                <div className="footerItem">
                    <div className="footerImage">
                        <img src={require("../../assets/icon_temperature_info.png")} alt="image" className='footerImg' />
                    </div>
                    <div className="footerInfo">
                        <div className="footerText">Min-Max</div>
                        <div className="footerValue">75<span>&deg;</span>-90<span>&deg;</span></div>
                    </div>
                </div>

                <div className="footerItem">
                    <div className="footerImage">
                        <img src={require("../../assets/icon_precipitation_info.png")} alt="image" className='footerImg' />
                    </div>
                    <div className="footerInfo">
                        <div className="footerText">Precepitation</div>
                        <div className="footerValue">{weatherData && weatherData.current_observation && weatherData.current_observation.atmosphere && weatherData.current_observation.atmosphere.pressure}%</div>
                    </div>
                </div>

                <div className="footerItem">
                    <div className="footerImage">
                        <img src={require("../../assets/icon_humidity_info.png")} alt="image" className='footerImg' />
                    </div>
                    <div className="footerInfo">
                        <div className="footerText">Humidity</div>
                        <div className="footerValue">{weatherData && weatherData.current_observation && weatherData.current_observation.atmosphere && weatherData.current_observation.atmosphere.humidity}%</div>
                    </div>
                </div>

                <div className="footerItem">
                    <div className="footerImage">
                        <img src={require("../../assets/icon_wind_info.png")} alt="image" className='footerImg' />
                    </div>
                    <div className="footerInfo">
                        <div className="footerText">Wind</div>
                        <div className="footerValue">{weatherData && weatherData.current_observation && weatherData.current_observation.wind && weatherData.current_observation.wind.speed} mph</div>
                    </div>
                </div>

                <div className="footerItem">
                    <div className="footerImage">
                        <img src={require("../../assets/icon_visibility_info.png")} alt="image" className='footerImg' />
                    </div>
                    <div className="footerInfo">
                        <div className="footerText">visibility</div>
                        <div className="footerValue">{weatherData && weatherData.current_observation && weatherData.current_observation.atmosphere && weatherData.current_observation.atmosphere.visibility} mph</div>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer