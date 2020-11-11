import React, {useState, useEffect} from 'react';
import {fetchWeather} from "./utils";

const debounce = require('lodash.debounce');

const useWeather = () => {
  const [city, setCity] = useState('new york');
  const [weather, setWeather] = useState({});
  const [cityWeather, setCityWeather] = useState({});
  const [scale, setScale] = useState('C');
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const get = async() => {
      if(weather[city]) {
        setCityWeather(weather[city]);
      } else {
        try {
          setIsLoading(true);
          const w = await fetchWeather(city);
          setWeather({
            ...weather,
            [city]:w,
          });
          setCityWeather(w);
          setIsLoading(false);
        } catch (e) {
          console.error(e);
          setIsLoading(false);
        }
      }
    }

    const debounced = debounce(get, 500);
    debounced();

  }, [city]);


  return({
    city,
    setCity,
    cityWeather,
    setCityWeather,
    scale, setScale,
    isLoading,
  });
};

export {
  useWeather,
}

