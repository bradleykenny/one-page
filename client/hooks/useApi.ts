import axios from "axios";
import { RequestTypes } from "models/RequestTypes";

const useApi = async (route: string, requestType?: RequestTypes) => {
    const sanitisedRoute = route.at(0) === '/' ? route.slice(1) : route;

    try {
        switch (requestType) {
            case 'GET':
                return await axios.get(`http://localhost:5001/api/v1/${sanitisedRoute}/`);
            case 'POST':
                return await axios.post(`http://localhost:5001/api/v1/${sanitisedRoute}/`);
            default: 
                return await axios.get(`http://localhost:5001/api/v1/${sanitisedRoute}/`);
        }
    } catch (e) {
        console.error(e);
    }
    
};

export default useApi;
