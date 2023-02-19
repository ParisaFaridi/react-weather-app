import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);
  let apiKey = "62bc298785543e137bc6756e514eb1c3";
  let baseURL = `https://api.openweathermap.org/data/2.5/weather?`;

  function updateCity(event) {
    setCity(event.target.value);
  }
  function showResults(event) {
    event.preventDefault();
    axios
      .get(`${baseURL}q=${city}&appid=${apiKey}&&units=metric`)
      .then(function (response) {
        setLoaded(true);
        setWeather({
          temp: response.data.main.temp,
          wind: response.data.wind.speed,
          humidity: response.data.main.humidity,
          icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
          desc: response.data.weather[0].description,
        });
      });
  }
  let form = (
    <form onSubmit={showResults}>
      <input
        type="search"
        placeholder="enter city name"
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature:{weather.temp}</li>
          <li>Wind Speed:{weather.wind}</li>
          <li>Humidity:{weather.humidity}</li>
          <li>{weather.desc}</li>
          <li>
            <img src={weather.icon} />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
