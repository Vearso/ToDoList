import React, {useState, useEffect} from 'react';
import {addOperation, deleteOperation} from "./operations";
import Operation from "./Operation";

const Operations = ({taskID, form, setForm, operations, setOperations, status}) => {
    const [operation, setOperation] = useState({description: '', timeSpent: 0});
    useEffect(()=>{

    },[operations])

    const handleChange = (e) => {
        e.preventDefault();
        setOperation({
            description: e.target.value,
            timeSpent: 0
        });
    }

    const handleAdd = (e) => {
        e.preventDefault()
        addOperation(taskID, operation, setOperations);
        setOperation({description: '', timeSpent: 0})
        setForm(false)
    }
    const removeOperationFromState = id => {
        deleteOperation(id,setOperations,taskID);
    }
    return (
        <>
            <div className="card-body">
                <form className={form ? '' : 'd-none'}>
                    <div className="input-group">
                        <input type="text"
                               className="form-control"
                               placeholder="Operation description"
                               value={operation.description}
                               onChange={e => handleChange(e)}/>

                        <div className="input-group-append">
                            <button className="btn btn-info"
                                    onClick={e => handleAdd(e)}>
                                Add
                                <i className="fas fa-plus-circle ml-1"/>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <ul className="list-group list-group-flush">
                {operations.map(operation => <Operation key={operation.id}
                                                        taskID={taskID}
                                                        description={operation.description}
                                                        onRemoveOperation={removeOperationFromState}
                                                        id={operation.id}
                                                        setOperations={setOperations}
                                                        timeSpent={operation.timeSpent}
                                                        status={status}/>)}
            </ul>
        </>
    )
}
export default Operations;