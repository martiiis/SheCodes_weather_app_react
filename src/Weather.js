/** @format */

import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import axios from "axios";
import Loader from "react-loader-spinner";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "428e65277f7b782b50f4593bfe33aeb5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      coordinates: response.data.coord,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Search">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="enter-city"
              placeholder="Enter city..."
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" className="btn btn-info" />
            <input
              type="button"
              value="📍 My location"
              className="btn btn-info"
            />
          </form>
        </div>
        <WeatherInfo data={weatherData} />
        <br/>
        <WeatherForecast data={weatherData} />
      </div>
    );
  } else {
    search();
    return <Loader type="ThreeDots" color="#30cfd0" height={100} width={100} />;
  }
}
