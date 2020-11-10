const fetchWeather = async (cityName = 'new york') => {
  const API_KEY = "<INSERT_API_KEY>";
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