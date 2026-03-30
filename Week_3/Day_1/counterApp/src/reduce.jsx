
import React from 'react'
import { useReducer } from 'react';

// Reducer function to handle state changes based on dispatched actions
// The reducer function takes the current state and an action as arguments and returns a new state based on the action type

function reducer(state, action) {

// The reducer function uses a switch statement to determine how to update the state based on the action type.
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
} 

// Counter App using useReducer
export default function App() {

    const [state, dispatch] = useReducer(reducer, { count: 0 });
  
    return (

// JSX to render the Counter App UI with buttons to increment and decrement the count using dispatch to send actions to the reducer function
    <div>
      <h1> Counter App</h1>
      <p>Count: {state.count}</p> 
      <button onClick={()=>dispatch({type:"increment"})}>+</button>
      <button onClick={()=>dispatch({type:"decrement"})}>-</button>
      
    </div>
  )
}
