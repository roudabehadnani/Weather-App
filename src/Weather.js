import React from "react";
import Day from "./Day";

function Weather({ weather, location }) {
  return (
    <div>
      <h2>Weather {location}</h2>
      <ul className="weather">
        {weather.time.map((element, index) => {
          return <Day min={weather.temperature_2m_min.at(index)} max={weather.temperature_2m_max.at(index)} code={weather.weathercode.at(index)} key={element} date={element} isToday={index === 0} />;
        })}
      </ul>
    </div>
  );
}

export default Weather;
