import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherWidget from "./components/WeatherWidget";
import {useWeather} from "./useWeather";

const App = () => {
  const { city, setCity, cityWeather,} = useWeather();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contently Weather Demo
        </p>
      </header>
      <main>
      <div className='weather-widget'>
        <input placeholder='enter city' value={city} onChange={(e) => {
          const {target:{value = ''} = {}} = e;
          setCity(value);
        }} />
        <WeatherWidget cityWeather={cityWeather} />
      </div>
      </main>
    </div>
  );
}

export default App;
