import React from "react";
import './WeatherApp.css'
import { useState } from "react"
import search_icon from '../asset/search.png'
import clear_icon from '../asset/clear.png'
import cloud_icon from '../asset/cloud.png'
import drizzle_icon from '../asset/drizzle.png'
import rain_icon from '../asset/rain.png'
import snow_icon from '../asset/snow.png'
import wind_icon from '../asset/wind.png'
import humidity_icon from '../asset/humidity.png'


const WeatherApp = () => {
    const [inputValue, setInputValue] = useState("");
    const [cels, setCels] = useState(0)
    const [data, setData] = useState()
    const [wicon, setWicon] = useState(cloud_icon)

    let api_key = "269049f2d58f85158caa27beb66f6c1c"

    const handleSearch = async (e) => {
        e.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${api_key}`
        console.log("name",inputValue);
        let response = await fetch(url)
        let dataW = await response.json()
        setData(dataW)
        console.log("data", data);

        const celsius = (data.main.temp - 273.15)
        setCels(celsius)
        console.log(cels);
        const firstTwo = parseFloat(cels.toFixed(2))

        const humidity = document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind")
        const temp = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")

        humidity[0].innerHTML = data.main.humidity+ " %"
        wind[0].innerHTML = data.wind.speed+ "km/h"
        temp[0].innerHTML = firstTwo+ " c"
        location[0].innerHTML = data.name
        console.log(data.main.temp);

        if(data.weather[0].icon === "01d" || data.weather[0].icon === "01d" ) {
            setWicon(clear_icon)
        } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
            setWicon(cloud_icon)
        } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
            setWicon(drizzle_icon)
        } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
            setWicon(cloud_icon)
        } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
            setWicon(rain_icon)
        } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
            setWicon(rain_icon)
        } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
            setWicon(snow_icon)
        } else {
            setWicon(clear_icon)
        }
        
      };
    return (
        <div className="container">
            <form className="top-bar" onSubmit={handleSearch}>
      <input
        type="text"
        className="cityInput"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="search-icon">
        <img src={search_icon} alt="" />
      </button>
    </form>

            <div className="weather-image">
                <img src={wicon} alt="" />
            </div>
            <div className="weather-temp">24C</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="wind">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default WeatherApp