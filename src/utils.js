const fetchWeather = async (cityName = 'new york') => {
  const API_KEY = "1adf77b0e0fe616d9cde0118729bac1d";
  try {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`, {
      headers: {}
    });
    const json = await result.json();
    return json;
  } catch (e) {
    console.error(e);
  };
};

const convertKtoC = (k) => {
  const c = k - 273.15;
  return (c.toFixed(0));
};

const convertKtoF = (k) => {
  const c = convertKtoC(k);
  const f = (c) * 9/5 + 32;

  return (f.toFixed(0));
};

export {
  fetchWeather,
  convertKtoC,
  convertKtoF,
}