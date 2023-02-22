import "./App.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <SearchEngine />
        <hr />
        Check out the code
        <a href="https://github.com/ParisaFaridi/react-weather-app">here</a>
      </div>
    </div>
  );
}
