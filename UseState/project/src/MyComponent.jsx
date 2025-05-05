import React, {useState} from 'react'

function MyComponent()
{
    // useState is a hook that allows you to add state to a functional component
    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const UpdateName = () =>
    {
        setName("R.a.mon");
    }
    const IncrementAge = () =>
    {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () =>
    {
        setIsEmployed(!isEmployed);
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={UpdateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={IncrementAge}>Increment Age</button>
            <p>Is Employed: {isEmployed ? "YES" : "NO"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    );
}
export default MyComponent;