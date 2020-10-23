import {API_KEY, API_URL} from "./constants";

export const getOperations = (id, successCallback) => {
    fetch(`${API_URL}/tasks/${id}/operations`, {
        headers: {
            "Authorization": API_KEY
        }
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data);
            }
        })
        .catch(err => console.warn(err));
};
export const addOperation = (id, operation, successCallback) => {
    fetch(`${API_URL}/tasks/${id}/operations`, {
        method: "POST",
        body: JSON.stringify(operation),
        headers: {
            "Authorization": API_KEY,
            "Content-Type": "application/json"
        }
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                getOperations(id, successCallback);
            }
        })
        .catch(err => console.warn(err))
}
export const getOperation = (id, successCallback) => {
    fetch(`${API_URL}/operations/${id}`, {
        method: "GET",
        headers: {
            "Authorization": API_KEY,
        }
    })
        .then(r => r.json())
        .catch(err => console.log(err))
        .then(data => {
            console.log(data);
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data);
            }
        })
        .catch(err => console.log(err))
}
export const changeOperation = (id, operation, successCallback, taskID) => {
    fetch(`${API_URL}/operations/${id}`, {
        method: "PUT",
        body: JSON.stringify(operation),
        headers: {
            "Authorization": API_KEY,
            "Content-Type": "application/json"
        }
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                getOperations(taskID, successCallback)
            }
        })
        .catch(err => console.warn(err))
}
export const deleteOperation = (id, successCallback, taskID) => {
    fetch(`${API_URL}/operations/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": API_KEY,
            "Content-Type": "application/json"
        }
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                getOperations(taskID, successCallback)
            }
        })
        .catch(err => console.warn(err))
}