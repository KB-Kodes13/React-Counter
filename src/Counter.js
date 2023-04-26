//In Counter.js, import the necessary dependencies: 
import React, { useState } from 'react';
//this is extra to mke it look good
import './Counter.css';
//Create a functional component called Counter. Inside the component, use the useState hook to create a state variable called count 
//with an initial value of 0 and a function called setCount to update the state.
function Counter() {
    const [count, setCount] = useState(0);
    
 //Implement two functions called increment and decrement inside the Counter component. The increment function should increase the count value by 1, 
 //and the decrement function should decrease the count value by 1. Use the setCount function to update the count value.   
    function increment() {
        setCount(count + 1);
      }
    
    function decrement() {
        setCount(count - 1);
      }
// In the Counter component's JSX, display the count value and create two buttons for incrementing and decrementing the counter. 
//Attach the increment and decrement functions as event handlers for the onClick event of the respective buttons.
    return (
        <div className="counter-container">
          <h1>How Many Games Will the Panthers Win?</h1>
          <button className="counter-btn" onClick={increment}>Increment</button>
          <span className="counter-value">{count}</span>
          <button className="counter-btn" onClick={decrement}>Decrement</button>
          
        </div>
    );
  }
//Export the Counter component.
  export default Counter;

  