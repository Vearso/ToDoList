import React, {useState, useEffect} from 'react';

const Operation = ({description, id, onRemoveOperation, timeSpent, status}) => {
    const [form,setForm] = useState(false);

    const handleAddTime = (e) =>{
        e.preventDefault();
        setForm(prev=>!prev);
    }
    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    Opis operacji
                    <span className="badge badge-success badge-pill ml-2">2h 15m</span>
                </div>
                <form>
                    <div className={form ? "input-group input-group-sm" : "d-none"}>
                        <input type="number"
                               className="form-control"
                               placeholder="Spent time in minutes"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-success"><i className="fas fa-save"/></button>
                            <button className="btn btn-outline-dark"><i className="fas fa-times false"/></button>
                        </div>
                    </div>
                </form>
                <div className={form ? "d-none" : null}>
                    <button className="btn btn-outline-success btn-sm mr-2"
                            onClick={e=>handleAddTime(e)}>
                        Add time
                        <i className="fas fa-clock ml-1"/></button>
                    <button className="btn btn-outline-danger btn-sm"><i className="fas fa-trash"/></button>
                </div>
            </li>
        </>
    )
}

export default Operation;