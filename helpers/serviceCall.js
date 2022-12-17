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
                console.log(response)
                resolve(response, url);
            })
            .catch(error => {
                console.log(error, url)
                // reject(error);
                return
            });
    });
}
export default ServiceCaller;