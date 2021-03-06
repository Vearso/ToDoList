import React, {useState, useEffect} from 'react';

const NewTask = ({onNewTask}) => {
    const [task, setTask] = useState({title: '', description: '',status: 'open'});
    const handleChange = (e) => {
        const {name,value} = e.target;
        setTask(prev => {
            return{
                ...prev,
                [name]: value,
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.title ==='' || task.description ===''){
            e.target.style.border = '1px solid red';
        }else {
            onNewTask(task);
        }

    }
    return(
        <div className="card shadow">
            <div className="card-body">
                <h1 className="card-title">New task</h1>
                <form onSubmit={e=>handleSubmit(e)}>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="title"
                               placeholder="Title"
                               value={task.title}
                               onChange={e=>handleChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="description"
                               placeholder="Description"
                               value={task.description}
                               onChange={e=>handleChange(e)}/>
                    </div>
                    <button className="btn btn-info">
                        Add task
                        <i className="fas fa-plus-circle ml-1"/>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewTask;