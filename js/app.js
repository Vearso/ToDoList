import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {getTasks,addTask,deleteTask} from "./API-tasks/tasks";
import NewTask from "./NewTask";
import Task from "./Task";

const App = () => {
    const [tasks,setTasks] = useState([]);
    useEffect(()=> {
        getTasks(setTasks);
    },[])

    const addNewTaskToState = task =>{
        addTask(task)
        getTasks(setTasks);
    }
    const removeTaskFromState = id =>{
        deleteTask(id);
        getTasks(setTasks);
    }

    return(
        <>
            <NewTask/>
            <Task title={tasks}/>
        </>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);