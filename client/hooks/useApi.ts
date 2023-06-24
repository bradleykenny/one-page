import axios from "axios";
import { RequestTypes } from "models/RequestTypes";
import { getSession } from "next-auth/react";

const useApi = async (
    route: string,
    requestType?: RequestTypes,
    data?: any
) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const fullRoute = `${apiUrl}${route}/`;

    let headers = {};
    const session = await getSession();
    const { token } = session["token"];
    if (token) {
        headers = {
            Authorization: "Bearer " + token,
        };
    }

    try {
        switch (requestType) {
            case "GET":
                return await axios.get(fullRoute, { headers });
            case "POST":
                return await axios.post(fullRoute, data, { headers });
            case "PUT":
                return await axios.put(fullRoute, data, { headers });
            case "DELETE":
                return await axios.delete(fullRoute, { headers });
            default:
                return await axios.get(fullRoute, { headers });
        }
    } catch (err) {
        console.error(err);
    }
};

export default useApi;
