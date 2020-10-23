import {API_KEY, API_URL} from "./constants";

export const getTasks = successCallback => {
    fetch(`${API_URL}/tasks`, {
        headers: {
            "Authorization": API_KEY,
        }
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === 'function') {
                successCallback(data.data);
            }
        })
        .catch(err => console.warn(err));
}
export const addTask = task => {
    fetch(`${API_URL}/tasks`,{
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            "Authorization": API_KEY,
        }
    })
        .then(r=>console.log(r))
        .catch(err=>console.warn(err))
}
export const finishTask = task => {
    fetch(`${API_URL}/tasks/${task.id}`,{
        method: "PUT",
        body: JSON.stringify(task),
        headers: {
            "Authorization": API_KEY,
        }
    })
        .then(r=>console.log(r))
        .catch(err=>console.warn(err))
}
export const deleteTask = id => {
    fetch(`${API_URL}/tasks/${id}`,{
        method: "DELETE",
        headers: {
            "Authorization": API_KEY,
        }
    })
        .then(r=>console.log(r))
        .catch(err=>console.warn(err))
}