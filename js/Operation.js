import React, {useState, useEffect} from 'react';
import {changeOperation, getOperation} from "./operations";

const Operation = ({taskID,description, id, setOperations, onRemoveOperation, timeSpent, status}) => {
    const [form,setForm] = useState(false);
    const [time,setTime] = useState('');
    const [operation,setOperation] = useState([]);

    useEffect(()=>{
        getOperation(id,setOperation)
    },[])

    const handleAddTime = (e) =>{
        e.preventDefault();
        setForm(prev=>!prev);
    }
    const handleChange = (e) => {
        setTime(e.target.value);
    }
    const handleSave = (e) => {
        e.preventDefault();
        setOperation(prev=>{
            return{
                ...prev,
                timeSpent: prev.timeSpent + +time,
            }
        })
        changeOperation(id,{...operation,timeSpent: operation.timeSpent + +time},setOperations,taskID)
        setTime('');
        setForm(false);
    }
    const handleClose = (e) => {
        e.preventDefault();
        setTime('')
        setForm(false);
    }

    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    {description}
                    <span className={ timeSpent > 0 ? "badge badge-success badge-pill ml-2" : "d-none"}>
                        {Math.floor(timeSpent / 60)}h &nbsp; {(timeSpent % 60)}m</span>
                </div>
                <form>
                    <div className={form ? "input-group input-group-sm" : "d-none"}>
                        <input type="number"
                               className="form-control"
                               placeholder="Spent time in minutes"
                               value={time}
                               onChange={(e)=>handleChange(e)}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-success"
                                    onClick={e=>handleSave(e)}>
                                <i className="fas fa-save"/></button>
                            <button className="btn btn-outline-dark"
                                    onClick={e=>handleClose(e)}>
                                <i className="fas fa-times false"/></button>
                        </div>
                    </div>
                </form>
                <div className={form ? "d-none" : null}>
                    <button className="btn btn-outline-success btn-sm mr-2"
                            onClick={e=>handleAddTime(e)}>
                        Add time
                        <i className="fas fa-clock ml-1"/></button>
                    <button className="btn btn-outline-danger btn-sm"
                            onClick={e=>onRemoveOperation(operation.id)}>
                        <i className="fas fa-trash"/></button>
                </div>
            </li>
        </>
    )
}

export default Operation;