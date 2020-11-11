import React, {useState, useEffect} from 'react';
import {fetchWeather} from "./utils";

const useWeather = () => {
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
          setCityWeather(w);
        } catch (e) {
          console.error(e);
        }
      }
    }
    get();
  }, [city]);


  return({
    city,
    setCity,
    cityWeather,
    setCityWeather,
  });
};

export {
  useWeather,
}

