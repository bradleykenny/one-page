import { PageResponse } from "models/Page";
import { ProjectResponse } from "models/Project";

import { useEffect, useState } from "react";

import useApi from "./useApi";

const usePage = (id: string) => {
    const [page, setPage] = useState<PageResponse>(undefined);
    const [project, setProject] = useState<ProjectResponse>(undefined);

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            if (!id) {
                return;
            }

            setLoading(true);
            const pageResponse = await useApi({
                route: `/page/${id}`,
                requestType: "GET",
            });

            if (pageResponse.data) {
                setPage(pageResponse.data);

                const { projectId } = pageResponse.data;
                if (projectId) {
                    const projectResponse = await useApi({
                        route: `/project/${projectId}`,
                        requestType: "GET",
                    });

                    if (projectResponse?.data) {
                        setProject(projectResponse.data);
                    }
                }
            }

            setLoading(false);
        };
        fetchData();
    }, [id]);

    return { loading, page, project };
};

export default usePage;
