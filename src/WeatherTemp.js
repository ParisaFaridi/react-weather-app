import React, { useState } from "react";

export default function WeatherTemp(props) {
  let [unit, setUnit] = useState("metric");
  function showFahrenhite(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  function showCelsuis(event) {
    event.preventDefault();
    setUnit("metric");
  }
  if (unit === "metric") {
    return (
      <div>
        <span className="temp">{Math.round(props.temp)}</span>
        <span className="unit">°C</span>
        <div>
          °C |
          <a href="" className="de-active" onClick={showFahrenhite}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    let fahrenhite = (props.temp * 9) / 5 + 32;
    return (
      <div>
        <span className="temp">{Math.round(fahrenhite)}</span>
        <span className="unit">°F</span>
        <div>
          <a href="" onClick={showCelsuis}>
            °C
          </a>
          | °F
        </div>
      </div>
    );
  }
}
