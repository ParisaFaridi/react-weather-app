import React from "react";
import FormattedDate from "./FormattedDate";

function WeatherInfo(props) {
  let weatherData = props.data;
  return (
    <div>
      <section className="row">
        <div className="col-4 text-center mt-3">
          <img src={weatherData.icon_url} alt={weatherData.icon} />
          <span className="temp">{Math.round(weatherData.temp)}</span>
          <span className="unit">°C</span>
          <div>
            <a href="">°C</a>
            <span> | </span>
            <a href="" className="de-active">
              °F
            </a>
          </div>
        </div>
        <div className="col-4 mt-4 mb-4">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              <FormattedDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">{weatherData.desc}</li>
          </ul>
        </div>
        <div className="col-4 pt-5 mt-3">
          <ul>
            <li>Humidity:{weatherData.humidity}%</li>
            <li>Wind:{Math.round(weatherData.wind)}</li>
          </ul>
        </div>
      </section>
      <section className="forecast"></section>
    </div>
  );
}

export default WeatherInfo;
