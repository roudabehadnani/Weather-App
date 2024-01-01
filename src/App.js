import React, { useState } from 'react'

/**function to get weather icons */
function getWeatherIcon(wmoCode){
  const icons = new Map([
    [[0], "☀️"],
    [[1], "🌤"],
    [[2], "⛅️"],
    [[3], "☁️"],
    [[45, 48], "🌫"],
    [[51, 56, 61, 66, 80], "🌦"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
    [[71, 73, 75, 77, 85, 86], "🌨"],
    [[95], "🌩"],
    [[96, 99], "⛈"],
  ]);
  const arr = [...icons.keys()].find((key)=>key.includes(wmoCode));
  if(!arr) return "NOT FOUND";
  return icons.get(arr);
}

/**Function to convert country code to flag */
function convertToFlag(countryCode) {
  const codePoints = countryCode.toUpperCase().split("").map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

/**Function to format date to String */
function formatDay(dateStr){
  return new Intl.DateTimeFormat(
    "en",{
      weekDay:"short"
    }    
  ).format(new Date(dateStr));
}

function App() {
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [displayLocation, setDisplayLocation] = useState("");
  const [weather, setWeather] = useState({});
  const onChangeHandler = (e) => {
    setLocation(e.target.value);
  };

  async function fetchWeather() {
    try {
      //getting the location
      setIsLoading(true);
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}`);
      const geoData = await geoRes.json();
      console.log(geoData);
      if (!geoData.results) throw new Error("Location not found");

      const { latitude, longitude, timezone, name, country_code } = geoData.results.at(0);
      console.log(`${name} ${convertToFlag(country_code)}`);
      setDisplayLocation(`${name} ${convertToFlag(country_code)}`);
      console.log(convertToFlag(country_code),"this is the country code");

      //getting the weather
      const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`);
      const weatherData = await weatherRes.json();
      setWeather(weatherData.daily);
      console.log(weatherData.daily);
    } catch (err) {
      console.log(err);
    } finally{
      setIsLoading(false);
    }
  }

  return (
    <div className="app">
      <h1>Classy Weather</h1>
      <input type="text" placeholder="Search From Location" value={location} onChange={onChangeHandler} />
      <p>{displayLocation}</p>
      <button onClick={fetchWeather}>Get Weather</button>
      {isLoading && <p className='loader'>Loading...</p>}
    </div>
  );
}

export default App