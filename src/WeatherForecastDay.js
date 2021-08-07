/** @format */

import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="weather-forecast-date">{day()}</div>
      <div className="WeatherForecast-icon">
        <WeatherIcon
          code={props.data.weather[0].icon}
          alt={props.data.weather[0].description}
          size="45px"
        />
      </div>
      <div className="weather-forecast-temperatures">
        <span className="weather-forecast-temperature-max">
          {maxTemperature()}
        </span>
        <span>~ </span>
        <span className="weather-forecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
