import React, { useEffect, useState } from "react";
import axios from "axios";
import ForecastWeatherDay from "./ForecastWeatherDay";

function WeatherForecast(props) {
  let apiKey = "8da4ecft94o07a66ae007734f06f8abe";
  let baseURL = "https://api.shecodes.io/weather/v1/";
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState({});
  useEffect(() => {
    setLoaded(false);
  }, [props.city]);
  function sendRequest() {
    axios
      .get(`${baseURL}forecast?query=${props.city}&key=${apiKey}`)
      .then(function (response) {
        console.log(response.data);
        setLoaded(true);
        setForecast(response.data.daily);
      });
  }
  if (loaded) {
    return (
      <div className="row mt-4">
        <ForecastWeatherDay data={forecast[0]} />
        <ForecastWeatherDay data={forecast[1]} />
        <ForecastWeatherDay data={forecast[2]} />
        <ForecastWeatherDay data={forecast[3]} />
        <ForecastWeatherDay data={forecast[4]} />
        <ForecastWeatherDay data={forecast[5]} />
      </div>
    );
  } else {
    sendRequest();
    return null;
  }
}

export default WeatherForecast;
