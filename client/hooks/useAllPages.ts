import { useEffect, useState } from "react";
import useApi from "./useApi";

const useAllPages = () => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await useApi(`/page/all`, "GET");
            if (response?.data) {
                setResult(response.data);
            }
        };
        fetchData();
    }, []);

    return { result };
};

export default useAllPages;
