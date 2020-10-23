import React, {useState, useEffect} from 'react';

const Task = ({title,description,id,status,onRemoveTask}) => {
    //const [,] = useState();
    console.log(title);
    return(
            <section className="card mt-5 shadow-sm">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <div>
                        <h5>Tytuł zadania</h5>
                        <h6 className="card-subtitle text-muted">Opis zadania</h6>
                    </div>
                    <div>
                        <button className="btn btn-info btn-sm mr-2">
                            Add operation
                            <i className="fas fa-plus-circle ml-1"/>
                        </button>
                        <button className="btn btn-dark btn-sm">
                            Finish
                            <i className="fas fa-archive ml-1"/>
                        </button>
                        <button className="btn btn-outline-danger btn-sm ml-2">
                            <i className="fas fa-trash false"/>
                        </button>
                    </div>
                </div>
            </section>

    )
}

export default Task;