import React, { useState } from 'react'

function App() {
  const [location, setLocation] = useState('');

  const onChangeHandler = (e) => { 
    setLocation(e.target.value)

  }

  const fetchWeather = ()=>{
    console.log("Loading data...")
    console.log(location)
  }

  return (
    <div className='app'>
      <h1>Classy Weather</h1>
      <input type='text' placeholder='Search From Location' value={location} onChange={onChangeHandler}/>
      <button onClick={fetchWeather}>Get Weather</button>

    </div>
  )
}

export default App