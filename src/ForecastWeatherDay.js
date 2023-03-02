import React from "react";

function ForecastWeatherDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }
  return (
    <div className="col-2">
      <div className="text-center">{day()}</div>
      <img src={props.data.condition.icon_url} alt="icon" width="60" />
      <div className="text-center">
        <span className="temp-max">
          {Math.round(props.data.temperature.maximum)}°{" "}
        </span>
        <span className="temp-min opacity-50">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}

export default ForecastWeatherDay;
