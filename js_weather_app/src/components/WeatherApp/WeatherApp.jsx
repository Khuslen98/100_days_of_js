import React from "react";
import './WeatherApp.css'
import search_icon from '../asset/search.png'
import clear_icon from '../asset/clear.png'
import cloud_icon from '../asset/cloud.png'
import drizzle_icon from '../asset/drizzle.png'
import rain_icon from '../asset/rain.png'
import snow_icon from '../asset/snow.png'
import wind_icon from '../asset/wind.png'
import humidity_icon from '../asset/humidity.png'


const WeatherApp = () => {
    return (
        <div className="container">
            <div className="top-bar">
                <input type="text \" className="cityInput" placeholder="Search" />
                <div className="search-icon">
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={cloud_icon} alt="" />
            </div>
            <div className="weather-temp">24C</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                
            </div>
        </div>
    )
}

export default WeatherApp