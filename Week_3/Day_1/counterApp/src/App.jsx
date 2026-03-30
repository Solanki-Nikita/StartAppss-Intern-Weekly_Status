import React from 'react'
import { useState } from 'react'


// Counter App using useState
export default function App() {
  const [count, setCount] = useState(0)

// Increment and Decrement functions with onClick event handlers
  const handleClickInc = () => {
    setCount(count + 1);
  }

  const handleClickDec = () => {
    setCount(count - 1);
  }

// JSX to render the Counter App UI with buttons to increment and decrement the count
  return (
    <div>
     <h1>Counter App</h1>
     <h3>{count}</h3>

     <button onClick={handleClickInc}>+</button>
     
     <button onClick={handleClickDec}>-</button>
    </div>
  )
}
