const fetchWeather = async (cityName = 'new york') => {
  const API_KEY = "1adf77b0e0fe616d9cde0118729bac1d";
  try {
    //`api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}`
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`, {
      headers: {}
    });
    const json = await result.json();
    return json;
  } catch (e) {
    console.error(e);
  };
};

export {
  fetchWeather,
}