import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {getTasks, addTask, deleteTask} from "./tasks";
import NewTask from "./NewTask";
import Task from "./Task";

const App = () => {
    const [tasks, setTasks] = useState('');

    useEffect(() => {
        getTasks(setTasks);
    }, [])

    const addNewTaskToState = task => {
        addTask(task,setTasks);
    }
    const removeTaskFromState = id => {
        deleteTask(id,setTasks);
    }
    if (tasks.length !== 0) {
        return (
            <>
                <NewTask onNewTask={addNewTaskToState}/>
                {tasks.map(task => <Task key={task.id}
                                         title={task.title}
                                         description={task.description}
                                         id={task.id}
                                         status={task.status}
                                         onRemoveTask={removeTaskFromState}/>)}
            </>
        )
    } else return null;
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);