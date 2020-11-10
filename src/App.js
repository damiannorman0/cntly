import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherWidget from "./components/WeatherWidget";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contently Weather Demo
        </p>
      </header>
      <div>
        <WeatherWidget />
      </div>
    </div>
  );
}

export default App;
