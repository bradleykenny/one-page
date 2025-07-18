import { useEffect, useState } from "react";

import { PageResponse, PageResponseWithProject } from "@src/models/Page";

import useApi from "./useApi";

const useAllPages = () => {
    const [result, setResult] = useState<PageResponseWithProject[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await useApi({
                route: `/page/all?limit=50`,
                requestType: "GET",
            });

            if (response?.data) {
                setResult(response.data);
            }
        };
        fetchData();
    }, []);

    return { result };
};

export default useAllPages;
