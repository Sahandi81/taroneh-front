import {API_URL} from "@/config/index";

const imageLoader=({src})=>{
    return `${API_URL}${src}`;
}

export default imageLoader;