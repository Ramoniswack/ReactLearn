import React, {useState} from 'react';
function Counter()
{

const [count, setCount] = useState(0);
const increment = () => {
    setCount(count + 1);
}
const decrement = () => {
    setCount(count - 1);
}

return(

    <div className="counter-container">
        <h1 className="counter-header">Counter</h1>
        <h2 className="counter-display">{count}</h2>
        <button className='counter-button' onClick={increment}>Increment</button>
        <button className='counter-button' onClick={decrement}>Decrement</button>
        <button className='counter-button' onClick={() => setCount(0)}>Reset</button>
 
    </div>

)

}
export default Counter;