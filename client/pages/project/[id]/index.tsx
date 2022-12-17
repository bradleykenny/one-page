import Card from "@src/components/Card";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import useApi from "@src/hooks/useApi";
import { ProjectResponse } from "models/Project";
import Head from "next/head";
import { useEffect, useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState<ProjectResponse[]>([]);

    useEffect(() => {
        const getProjects = async () => {
            const projectsResponse = await useApi("project/all", "GET");
            setProjects(projectsResponse.data);
        };

        getProjects();
    }, []);

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
                        {projects.length > 1 && (
                            <Card>
                                <div className="-mt-6 -mx-8 mb-4 overflow-hidden h-48">
                                    <img
                                        src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2096&q=80"
                                        className="bg-cover w-full"
                                    />
                                </div>
                                <div className="-mx-2">
                                    <h1>{projects[0].name}</h1>
                                    <p className="m-0 text-gray-500">
                                        {projects[0].description}
                                    </p>
                                </div>
                            </Card>
                        )}
                        <h1 className="pt-6 pl-6 pb-2">Pages</h1>
                        {projects.length > 1 && (
                            <Card>
                                <div className="-mt-6 -mx-8 mb-4 overflow-hidden h-48">
                                    <img
                                        src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2096&q=80"
                                        className="bg-cover w-full"
                                    />
                                </div>
                                <div className="-mx-2">
                                    <h1>{projects[0].name}</h1>
                                    <p className="m-0 text-gray-500">
                                        {projects[0].description}
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
