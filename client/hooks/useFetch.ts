import axios from "axios";
import { useCookies } from "react-cookie";

import { useEffect, useState } from "react";

axios.defaults.baseURL = process.env.API_URL;

interface useFetchParams {
    url: string;
    method: "get" | "post" | "delete" | "put";
    body?: any;
    headers?: any;
}

const useFetch = (params: useFetchParams) => {
    const { url, method, body = {}, headers = {} } = params;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [cookie] = useCookies(["token"]);

    console.log('c', cookie);

    const authToken = cookie.token;
    if (authToken) {
        headers["Authorization"] = "Bearer " + authToken;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios[method](
                    url,
                    JSON.parse(headers),
                    JSON.parse(body)
                );
                setData(res.data);
            } catch (err) {
                console.error(`Error: ${err}`);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return {
        data,
        loading,
        error,
    };
};

export default useFetch;
