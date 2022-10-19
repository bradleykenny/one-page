import { useEffect, useState } from "react";
import useApi from "./useApi";

const usePage = (id: string) => {
    const [result, setResult] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            if (!id) {
                return;
            }

            const response = await useApi(`/page/${id}`, "GET");
            if (response.data) {
                setResult(response.data);
            }
        };
        fetchData();
    }, [id]);

    return { result };
};

export default usePage;
