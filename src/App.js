import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherWidget from "./components/WeatherWidget";
import {useWeather} from "./useWeather";
import Scale from "./components/Scale";


const App = () => {
  const { city, setCity, cityWeather, isLoading, scale, setScale} = useWeather();
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
        <Scale setScale={setScale} scale={scale}/>
        <WeatherWidget cityWeather={cityWeather} scale={scale} />
        {loading}
      </div>
      </main>
    </div>
  );
}

export default App;
