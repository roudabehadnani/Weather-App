import React, { useEffect, useState } from 'react'
import Weather from './Weather';
import BackgroundAnimation from './BackgroundAnimation';
import Background from './Background';


/**Function to convert country code to flag */
function convertToFlag(countryCode) {
  const codePoints = countryCode.toUpperCase().split("").map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function App() {
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isBackground, setIsBackground] = useState(true);
  const [displayLocation, setDisplayLocation] = useState("");
  const [weather, setWeather] = useState({
    time: "",
    weathercode: "",
    temperature_2m_max: "",
    temperature_2m_min: "",
  });
  const onChangeHandler = (e) => {
    setLocation(e.target.value);
  };

  async function fetchWeather() {
    if (location.length < 2) return setWeather({});
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

  useEffect(()=>{
    fetchWeather();
    // localStorage.setItem("location",location);
    
  },[location])

  return (
    <>
    {isBackground && <Background />}
    <div className="app">
      <h1>Classy Weather</h1>
      <input type="text" placeholder="Search From Location" value={location} onChange={onChangeHandler} />
      {/* <button onClick={fetchWeather}>Get Weather</button> */}
      {isLoading && <p className='loader'>Loading...</p>}
      {weather.weathercode && <Weather weather={weather} location={displayLocation}/>}
    </div>
    </>
  );
}

export default App