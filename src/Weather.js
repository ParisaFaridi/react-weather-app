import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [city, setCity] = useState(props.city);
  let [weatherData, setWeatherData] = useState({ loaded: false });
  let apiKey = "8da4ecft94o07a66ae007734f06f8abe";
  let baseURL = "https://api.shecodes.io/weather/v1/";
  function request() {
    axios
      .get(`${baseURL}current?query=${city}&key=${apiKey}`)
      .then(function (response) {
        setWeatherData({
          loaded: true,
          desc: response.data.condition.description,
          icon_url: response.data.condition.icon_url,
          icon: response.data.condition.icon,
          temp: response.data.temperature.current,
          humidity: response.data.temperature.humidity,
          wind: response.data.wind.speed,
          date: new Date(response.data.time * 1000),
          city: response.data.city,
        });
      });
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    request();
  }
  if (weatherData.loaded) {
    return (
      <div className="Weather p-3">
        <form onSubmit={search}>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="enter city name"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input className="btn btn-primary" type="submit" value="Search" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
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
