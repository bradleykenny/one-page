import axios from "axios";
import { RequestTypes } from "models/RequestTypes";

const useApi = async (
    route: string,
    requestType?: RequestTypes,
    data?: any
) => {
    const sanitisedRoute = route.at(0) === "/" ? route.slice(1) : route;
    const apiUrl = "http://localhost:5001/api/v1/";
    const fullRoute = `${apiUrl}${sanitisedRoute}/`;

    try {
        switch (requestType) {
            case "GET":
                return await axios.get(fullRoute);
            case "POST":
                return await axios.post(fullRoute, data);
            case "PUT":
                return await axios.put(fullRoute);
            case "DELETE":
                return await axios.delete(fullRoute);
            default:
                return await axios.get(`${apiUrl}${sanitisedRoute}/`);
        }
    } catch (e) {
        console.error(e);
    }
};

export default useApi;
