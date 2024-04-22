import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <span className="weatherForecast-day">Mon</span>
          <WeatherIcon code="01d" size={36} />
          <span className="temperature-min">5°</span>
          <span className="temperature-max">9°</span>
        </div>
      </div>
    </div>
  );
}
