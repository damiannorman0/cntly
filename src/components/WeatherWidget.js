import React from 'react';


const WeatherWidget = (props) => {
  const getImageClass = (description = '') => {
    let d = description.toLowerCase().replace(' ', '');
    if(d.includes('cloud')) {
      d = 'cloudy';
    }

    switch (d) {
      case 'sunny':
        return 'sunny';
      case 'clearsky':
        return 'clear';
      case 'rainy':
      case 'rain':
        return 'rainy';
      case 'cloudy':
      case 'overcast':
        return 'cloudy';
      default:
        return '';
    }
  };
  const {cityWeather = {}} = props;
  const {
    main:{temp_min, temp_max} = {},
    weather = [],
  } = cityWeather;
  const {description:conditions} = weather[0] || {};
  const imgClass = getImageClass(conditions);

  return (
    <div>
      <div className={imgClass} />
      <p>Conditions: {conditions}</p>
      <p>Low: {temp_min}</p>
      <p>Hight: {temp_max}</p>
    </div>
  );
};

export default WeatherWidget;