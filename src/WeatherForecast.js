import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "97f8e93f00107773f88eafd933ce86b7";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

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
