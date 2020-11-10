import React, {useState, useEffect} from 'react';
import {fetchWeather} from "./utils";

const AppContext = React.createContext({});
AppContext.displayName = 'AppContext';

const AppProvider = (props) => {
  const [city, setCity] = useState('new york');
  const [weather, setWeather] = useState({});
  const [cityWeather, setCityWeather] = useState({});

  useEffect(() => {
    const get = async() => {
      if(weather[city]) {
        setCityWeather(weather[city]);
      } else {
        try {
          const w = await fetchWeather(city);
          setWeather({
            ...weather,
            [city]:w,
          });
          setCityWeather(weather[city]);
        } catch (e) {
          console.error(e);
        }
      }
    }
    get();
  }, [city]);


  return(
    <AppContext.Provider
      value={{
        city,
        setCity,
        cityWeather,
        setCityWeather,
    }} />
  );
};

const AppConsumer = AppContext.Consumer;
export { AppContext, AppConsumer, };

