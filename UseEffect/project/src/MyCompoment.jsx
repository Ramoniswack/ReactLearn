import React, {useState, useEffect} from 'react';

function MyComponent()
{
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [count, setCount] = useState(0);
    const[color, setColor] = useState("green");


    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        console.log("Event listener added");

        return() =>
        {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed");
        }
    

    }, []
);
   
    useEffect(()=>
    {
        document.title = `count: ${count} ${color}` ;
    },

    
    [count, color]);
    function addCount()
    {
        setCount(c => c + 1);
    }
    function subtractCount()
    {
        setCount(c=> c-1);
    }
    function changeColor()
    {
        setColor(c=> c === "green" ? "red" : "green")
    }
    function handleResize()
    {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return(
        <>
        <p style={{color:color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <button onClick={changeColor}>Change Color</button>


        <p> Window weight: {width} </p>
        <p> Windoe height: {height} </p>
        </>
    )

}
export default MyComponent;