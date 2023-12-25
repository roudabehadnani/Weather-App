import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button>+</button>
      <span>Count</span>
      <button>-</button>
    </div>
  )
}

export default App