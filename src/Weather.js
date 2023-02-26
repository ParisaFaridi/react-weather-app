import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ loaded: false });
  let apiKey = "8da4ecft94o07a66ae007734f06f8abe";
  let baseURL = "https://api.shecodes.io/weather/v1/current?";
  function request() {
    axios
      .get(`${baseURL}query=${props.city}&key=${apiKey}`)
      .then(function (response) {
        console.log(response);
        setWeatherData({
          loaded: true,
          desc: response.data.condition.description,
          icon_url: response.data.condition.icon_url,
          icon: response.data.condition.icon,
          temp: response.data.temperature.current,
          humidity: response.data.temperature.humidity,
          wind: response.data.wind.speed,
        });
      });
  }
  if (weatherData.loaded) {
    return (
      <div className="Weather p-3">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="enter city name"
              />
            </div>
            <div className="col-3">
              <input className="btn btn-primary" type="submit" value="Search" />
            </div>
          </div>
        </form>
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
            <h1>{props.city}</h1>
            <ul>
              <li>Thursday</li>
              <li>20:09</li>
              <li>Overcast</li>
              <li>Clouds</li>
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
  } else {
    request();
    return (
      <div className="Weather p-3">
        <h3>Loading...</h3>
      </div>
    );
  }
}
