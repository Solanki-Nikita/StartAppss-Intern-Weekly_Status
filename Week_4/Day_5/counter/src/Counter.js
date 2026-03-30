// Import the useState hook from React
// useState allows a component to store and update data (state)


import {useState} from 'react'

// This is a functional component called Counter

export default function Counter() {

  // useState creates a state variable
  // count → current value of the counter
  // setCount → function used to update the counter value
  // 0 → initial value of the counter

    const [count, setCount] = useState(0);


  // Function to increase the counter value
  // This function will run when the "Increase" button is clicked

    const increase = () => {
    // setCount updates the state value

        setCount(count + 1);
    }
   // Function to decrease the counter value
  // This runs when the "Decrease" button is clicked
  
    const decrease = () => {

    // The counter value will decrease by 1
        setCount(count - 1);
    }

 // Function to reset the counter back to zero
   const reset = () => {

//    Sets the counter value to 0
    setCount(0);

   };

// The return statement contains JSX
// JSX describes what will be displayed in the UI
  
  return (
    <div>
       
      <h2>Counter : {count} </h2>
   
      {/* Button to increase, decrease the counter */}
      {/* onClick is a React event */}
      {/* When clicked, it calls the increase & decrease function */}
     
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>


       {/* Button to reset the counter */}
      {/* Clicking it calls the reset function */}
      <button onClick={reset}>Reset</button>

    </div>
  );
}
