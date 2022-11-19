import {API_URL} from "@/config/index";

async function ServiceCaller(url, options = {}) {
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/${url}`, {
            ...options,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...(options.headers || {})
            },
        })
            .then(response => response.json())
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}
export default ServiceCaller;