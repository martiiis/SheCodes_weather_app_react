/** @format */

import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container-weatherInfo">
        <div className="row">
          <div className="col-6">
            <h1 className="city">{props.data.city}</h1>
            <hr />
            <WeatherTemperature celsius={props.data.temperature} />
            <span className="col weather-values">
              {props.data.description}{" "}
            </span>
            <WeatherIcon
              code={props.data.icon}
              alt={props.data.description}
              size="70px"
            />
          </div>
          <div className="col-6">
            <div className="date">
              Last updated: <FormattedDate date={props.data.date} />
            </div>
            <div className="container-fluid-details">
              <div className="row">
                <div className="col">
                  <div className="weather-details">Humidity</div>
                  <div>
                  <i className="fas fa-tint"></i>
                    <span className="col weather-values">
                      {props.data.humidity}{" "}
                    </span>
                    <span> %</span>
                  </div>
                </div>
                <div className="col">
                  <div className="weather-details">Wind</div>
                  <div>
                  <i className="fas fa-wind"></i>
                    <span className="col weather-values">
                      {Math.round(props.data.wind)}
                    </span>
                    <span>km/h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
