import React, {useState, useEffect} from 'react';
import {getOperations} from "./operations";
import Operations from "./Operations";
import {deleteTask, finishTask} from "./tasks";
const Task = ({title, description, id, status, onRemoveTask}) => {
    const [operations, setOperations] = useState([]);
    const [isOpen,setIsOpen] = useState(status);
    const [form,setForm] = useState(false);

    useEffect(() => {
        getOperations(id, setOperations);
    }, []);

    const handleFinish = (e) => {
        if(operations.length === 0) {
            e.preventDefault();
            setIsOpen(false);
            finishTask({
                title: title,
                id: id,
                status: false,
            })
        }
    }
    const handleAddOperation = e => {
        e.preventDefault();
        setForm(prev => !prev);

    }

    return (
        <section className="card mt-5 shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
                <div>
                    <h5>{title}</h5>
                    <h6 className="card-subtitle text-muted">{description}</h6>
                </div>
                <div>
                    <button className={isOpen ? `btn btn-info btn-sm mr-2` : `d-none`}
                            onClick={e=>handleAddOperation(e)}>
                        Add operation
                        <i className="fas fa-plus-circle ml-1"/>
                    </button>
                    <button className={isOpen ? "btn btn-dark btn-sm" : `d-none`}
                            onClick={(e) => handleFinish(e)}>
                        Finish
                        <i className="fas fa-archive ml-1"/>
                    </button>
                    <button className={ "btn btn-outline-danger btn-sm ml-2"}
                            onClick={() => onRemoveTask(id)}>
                        <i className="fas fa-trash false"/>
                    </button>
                </div>
            </div>
            <Operations taskID={id}
                        form={form}
                        setForm={setForm}
                        status={status}
                        operations={operations}
                        setOperations={setOperations}/>
        </section>

    )
}

import Operation from "./Operation";

export default Task;