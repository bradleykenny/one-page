import Card from "@src/components/Card";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import useApi from "@src/hooks/useApi";
import { ProjectResponse } from "models/Project";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Projects = () => {
    const router = useRouter();
    const queryId = router.query?.id;
    const [project, setProject] = useState<ProjectResponse>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            if (!queryId) {
                return;
            }

            const response = await useApi(`/project/${queryId}`, "GET");
            if (response?.data) {
                setProject(response.data);
            }
        };
        fetchData();
    }, [queryId]);

    return (
        <div>
            <Head>
                <title>one:page | home</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className="bg-gray-200 min-h-screen">
                <Navbar activeTab="Projects" />
                <div className="pt-24">
                    <Sidebar />
                    <div className="pb-6 mx-80">
                        {project && (
                            <Card>
                                <div className="-mt-6 -mx-8 mb-4 overflow-hidden h-48">
                                    <img
                                        src={project.imageUrl}
                                        className="bg-cover w-full"
                                    />
                                </div>
                                <div className="-mx-2">
                                    <h1>{project.name}</h1>
                                    <p className="m-0 text-gray-500">
                                        {project.description}
                                    </p>
                                </div>
                            </Card>
                        )}
                        <h1 className="pt-6 pl-6 pb-2">Pages</h1>
                        {project && (
                            <Card>
                                <div className="-mt-6 -mx-8 mb-4 overflow-hidden h-48">
                                    <img
                                        src={project.imageUrl}
                                        className="bg-cover w-full"
                                    />
                                </div>
                                <div className="-mx-2">
                                    <h1>{project.name}</h1>
                                    <p className="m-0 text-gray-500">
                                        {project.description}
                                    </p>
                                </div>
                            </Card>
                        )}
                    </div>
                    <SidebarInfo />
                </div>
            </div>
        </div>
    );
};

export default Projects;
