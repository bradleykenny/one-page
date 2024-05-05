import axios, { AxiosRequestConfig } from "axios";
import { RequestTypes } from "models/RequestTypes";
import { getSession } from "next-auth/react";

interface Params {
    route: string;
    requestType?: RequestTypes;
    data?: any;
    configs?: AxiosRequestConfig;
}

const useApi = async (params: Params) => {
    const { route, requestType, data, configs } = params;

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

    const combinedConfigs: AxiosRequestConfig = {
        headers: {
            ...headers,
            ...configs?.headers,
        },
        ...configs,
    };

    try {
        switch (requestType) {
            case "GET":
                return await axios.get(fullRoute, combinedConfigs);
            case "POST":
                return await axios.post(fullRoute, data, combinedConfigs);
            case "PUT":
                return await axios.put(fullRoute, data, combinedConfigs);
            case "DELETE":
                return await axios.delete(fullRoute, combinedConfigs);
            default:
                return await axios.get(fullRoute, combinedConfigs);
        }
    } catch (err) {
        console.error(err);
    }
};

export default useApi;
