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
export const addOperation = (id, operation) => {
    fetch(`${API_URL}/tasks/${id}/operations`, {
        method: "POST",
        body: JSON.stringify(operation),
        headers: {
            "Authorization": API_KEY,
        }
    })
        .then(r => console.log(r))
        .catch(err => console.warn(err))
}
export const getOperation = (id, successCallback) => {
    fetch(`${API_URL}/tasks/${id}`, {
        method: "GET",
        headers: {
            "Authorization": API_KEY,
        }
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data);
            }
        })
        .catch(err => console.log(err))
}
export const changeOperation = (id, operation) => {
    fetch(`${API_URL}/tasks/${id}/`, {
        method: "PUT",
        body: JSON.stringify(operation),
        headers: {
            "Authorization": API_KEY,
        }
    })
        .then(r => console.log(r))
        .catch(err => console.warn(err))
}
export const deleteOperation = (id) => {
    fetch(`${API_URL}/tasks/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": API_KEY,
        }
    })
        .then(r => console.log(r))
        .catch(err => console.warn(err))
}