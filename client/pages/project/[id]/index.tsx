import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "@src/components/Card";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import useApi from "@src/hooks/useApi";
import { ProjectResponse } from "models/Project";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const dummyData = [
    {
        id: "1",
        title: "First document",
        description: "This is some content that is not real.",
    },
    {
        id: "2",
        title: "Second document",
        description: "This is also some content that is not real.",
    },
    {
        id: "3",
        title: "Third document",
        description: "This is also also some content that is not real.",
    },
];

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
                                    <h1>
                                        {project.name}
                                        {project.access === "PRIVATE" && (
                                            <FontAwesomeIcon
                                                icon={faLock}
                                                size="xs"
                                                className="ml-2 text-slate-500"
                                            />
                                        )}
                                    </h1>
                                    <p className="m-0 text-gray-500">
                                        {project.description}
                                    </p>
                                </div>
                            </Card>
                        )}
                        <h1 className="pt-6 pl-6 pb-2">Pages</h1>
                        {project && (
                            <div className="grid grid-cols-2 gap-4">
                                {dummyData.map((data) => (
                                    <div className="w-full">
                                        <Card>
                                            <h2 className="m-0">
                                                {data.title}
                                            </h2>
                                            <p className="m-0 text-gray-500">
                                                {data.description}
                                            </p>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <SidebarInfo />
                </div>
            </div>
        </div>
    );
};

export default Projects;
