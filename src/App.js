import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherWidget from "./components/WeatherWidget";
import {useWeather} from "./useWeather";


const App = () => {
  const { city, setCity, cityWeather, isLoading} = useWeather();
  const loading = (isLoading && <div className='loading'>...</div>);
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
        {loading}
      </div>

      </main>
    </div>
  );
}

export default App;
