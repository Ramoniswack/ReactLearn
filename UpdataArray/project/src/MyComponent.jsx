import React, {useState} from 'react';

function MyComponent()
{   
    const [foods, setFoods] = useState(["apple","orange","banana"]);
    
function handlerAddFruits(event)
{
    const newFood = document.getElementById("foodInput").value;
   setFoods(f => ([...f, newFood])); 
}
function handlerRemoveFruits(index)
{
    setFoods(foods.filter((element, i) => i !== index))
}

    return(
        <>
        <h2>List of foods </h2>
        <ul>
            
            {foods.map((food, index) => <li key={index} onClick={()=> handlerRemoveFruits(index)}>{food}</li>)}
        </ul>

        <input type='text' id='foodInput' placeholder='Enter food name'/>
        <br>
        </br>
        <button onClick={handlerAddFruits}>Add Food</button>
        </>
    )
}
export default MyComponent;