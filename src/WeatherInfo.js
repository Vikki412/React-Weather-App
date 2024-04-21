import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <WeatherIcon code={props.data.icon} size={90} />
      <h1>
        <WeatherTemperature celsius={props.data.temperature} />
      </h1>
      <h2>{props.data.city}</h2>
      <h3>
        <FormattedDate date={props.data.date} />{" "}
      </h3>
      <p>{props.data.description}</p>{" "}
      <div className="container">
        <div className="row">
          <div className="col-6">
            <ul>
              <li>
                <strong>{props.data.humidity} %</strong>
              </li>
              <li>Humidity</li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <strong>{props.data.wind} kmh</strong>
              </li>
              <li>Wind</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
