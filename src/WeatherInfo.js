import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <p>
        <FormattedDate date={props.data.date} />{" "}
      </p>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-right">
              <WeatherIcon code={props.data.icon} size={120} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
      <p>{props.data.description}</p>{" "}
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ul>
              <li>
                <strong>{props.data.humidity} %</strong>
              </li>
              <li>Humidity</li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>
                <strong>{props.data.wind} kmh</strong>
              </li>
              <li>Wind</li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>
                <strong>{props.data.pressure} hpa</strong>
              </li>
              <li>Pressure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
