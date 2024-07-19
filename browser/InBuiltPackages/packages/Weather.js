const weather_catcher = async location => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2ebe75e4ac6e9bfe0347cb4ec9f4d669&units=metric`;
  try {
    const raw_data = await fetch(url);
    const weather_json_data = await raw_data.json();
    weather_json_data.weather[0].icon = `https://openweathermap.org/img/w/${weather_json_data.weather[0].icon}.png`;
    return weather_json_data;
  } catch (error) {
    return { error: error.message };
  }
};

// Use async/await to call the function and assign the result to a variable
const weather = async (location="usa") => {
  let data = await weather_catcher(location);
  return data;
};

export {
  weather_catcher as Weather_Catcher,
  weather as Weather
}