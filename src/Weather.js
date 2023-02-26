import React from "react";
import "./Weather.css";

export default function Weather(props) {
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
        <div className="col-4 text-center mt-5">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="weather-logo"
          />
          <span className="temp">10</span>
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
          <h1>Paris</h1>
          <ul>
            <li>Thursday</li>
            <li>20:09</li>
            <li>Overcast</li>
            <li>Clouds</li>
          </ul>
        </div>
        <div className="col-4 pt-5 mt-3">
          <ul>
            <li>Humidity:79%</li>
            <li>Wind:5km/h</li>
          </ul>
        </div>
      </section>
      <section className="forecast"></section>
    </div>
  );
}
