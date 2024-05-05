import { useEffect, useState } from "react";

import useApi from "./useApi";

interface Params {
    projectIds: string[];
}

const useProjectsById = (params: Params) => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await useApi({
                route: `/project/byId`,
                requestType: "GET",
                configs: {
                    params: { ids: params.projectIds },
                },
            });
            if (response?.data) {
                setResult(response.data);
            }
        };

        fetchData();
    }, []);

    return { result };
};

export default useProjectsById;
