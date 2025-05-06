import React, {useState} from "react";
function ToDoList()
{
    const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event)
    {
        setNewTask(event.target.value);
    }

    function addTask()
    {
        if(newTask.trim() !== "")
        {
            setTasks(t=> [ ...t,newTask]);
            setNewTask("");
        }
       
    }

    function deleteTask(index)
    {
        const updatedTasks = tasks.filter((element, i) => i !==index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index)
    {
        if(index > 0)
        {
            const updatedTasks = [...tasks];
         [updatedTasks[index], updatedTasks[index-1]]= [updatedTasks[index-1],updatedTasks[index]];
         setTasks(updatedTasks);
        }

    }

    function moveTaskDown(index)
    {
        if(index < tasks.length-1)
        {
            const updatedTasks = [...tasks];
         [updatedTasks[index], updatedTasks[index+1]]= [updatedTasks[index+1],updatedTasks[index]];
         setTasks(updatedTasks);
        }

    }

    return(
        <>
        <div className="to-do-list">
            <h1> To do List</h1>

            <div className="Enter-task-with-button"> 

             <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
             <button className="add-button" onClick={addTask}>Add</button>
             </div>

             <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="Delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={()=>moveTaskUp(index)}>UP +</button>
                        <button className="move-down" onClick={()=>moveTaskDown(index)}>Down -</button>





                    </li>
                )}
             </ol>
             </div>

        </>
    )
}
export default ToDoList;