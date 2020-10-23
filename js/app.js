import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {getTasks} from "./tasks";
import NewTask from "./newTask";
import Task from "./Task";

const App = () => {
    const [tasks,setTasks] = useState();

    useEffect(()=>{
        getTasks(setTasks());
    },[])

    const addNewTaskToState = task =>{


    }
    const removeTaskFromState = task =>{

    }

    return(
        <>
            <NewTask/>
            <Task/>
        </>
    )
}