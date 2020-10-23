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
export const addTask = (task,successCallback) => {
    fetch(`${API_URL}/tasks`,{
        headers: {
            "Authorization": API_KEY,
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(task)
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === 'function') {
                successCallback(data.data);
            }
        })
        .catch(err => console.warn(err));
}
export const finishTask = (task,successCallback) => {
    fetch(`${API_URL}/tasks/${task.id}`,{
        method: "PUT",
        body: JSON.stringify(task),
        headers: {
            "Authorization": API_KEY,
            "Content-Type": "application/json"
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
export const deleteTask = (id,successCallback) => {
    fetch(`${API_URL}/tasks/${id}`,{
        method: "DELETE",
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