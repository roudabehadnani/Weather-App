import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  const handleDecrement = () =>{
    setCount(count - 1);
  }

  const handleIncrement = () =>{
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default Counter;