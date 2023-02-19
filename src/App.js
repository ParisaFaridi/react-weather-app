import logo from "./logo.svg";
import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <hr />
      Check out the code
      <a href="https://github.com/ParisaFaridi/react-weather-app">here</a>
    </div>
  );
}

export default App;
