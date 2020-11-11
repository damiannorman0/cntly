import React from 'react';
import {convertKtoC, convertKtoF} from "../utils";

const getImageClass = (description = '') => {
  let d = description.toLowerCase().replace(' ', '');
  if(d.includes('cloud')) {
    d = 'cloudy';
  }

  if(d.includes('rain')) {
    d = 'rainy';
  }

  if(d.includes('clear')) {
    d = 'clear';
  }

  const ref = {
    'sunny': 'sunny',
    'clear': 'clear',
    'rainy': 'rainy',
    'cloudy': 'cloudy',
    'overcast': 'cloudy',
  }

  return ref[d] || '';
};

const WeatherWidget = (props) => {
  const {cityWeather = {}, scale} = props;
  const {
    main:{temp_min, temp_max} = {},
    weather = [],
  } = cityWeather;

  if(!temp_min || !temp_max) {
    return <></>;
  }

  let convertedMin, convertedMax;
  if(scale === 'F') {
    convertedMin = convertKtoF(temp_min);
    convertedMax = convertKtoF(temp_max);
  } else {
    convertedMin = convertKtoC(temp_min);
    convertedMax = convertKtoC(temp_max);
  }

  const {description:conditions} = weather[0] || {};
  const imgClass = getImageClass(conditions);

  return (
    <>
      <div className={imgClass} />
      <p>Conditions: {conditions}</p>
      <p>Low: {convertedMin} {scale}</p>
      <p>Hight: {convertedMax} {scale}</p>
    </>
  );
};

export default WeatherWidget;