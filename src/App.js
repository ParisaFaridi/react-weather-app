import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <span className="text-center d-block">
          Check out the code
          <a href="https://github.com/ParisaFaridi/react-weather-app"> here</a>
        </span>
      </div>
    </div>
  );
}
