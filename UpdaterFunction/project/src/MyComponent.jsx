import React, { useState } from "react"

function MyComponent()
{

    const [count, setCount] = useState(0);

function increment()
{
    // Updater function means this
  setCount(prevCount=> prevCount+1);
  setCount(prevCount=> prevCount+1);

}
function decrement()
{
  setCount(count-1)

}
function reset()
  {
    setCount(0);
  }

  return(
    <div>
     <h1>Count: </h1>
    <p>{count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={reset}>Reset</button>
    <button onClick={decrement}>DECREMENT</button>


    </div>
   


  )
}
export default MyComponent;