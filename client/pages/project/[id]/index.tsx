import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "@src/components/Card";
import CreateProjectModal from "@src/components/CreateProjectModal";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import useApi from "@src/hooks/useApi";
import { ProjectResponse } from "models/Project";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const fakePagesData = [
    {
        id: "1",
        name: "Christmas",
        creator: "brad@mail.com",
        lastUpdated: Date.now(),
    },
    {
        id: "2",
        name: "Easter",
        creator: "brad@mail.com",
        lastUpdated: Date.now(),
    },
    {
        id: "3",
        name: "Boxing Day",
        creator: "brad@mail.com",
        lastUpdated: Date.now(),
    },
];

const Projects = () => {
    const router = useRouter();

    const [projects, setProjects] = useState<ProjectResponse[]>([]);
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        const getProjects = async () => {
            const projectsResponse = await useApi("project/all", "GET");
            setProjects(projectsResponse.data);
        };

        getProjects();
    }, []);

    const handleProjectClick = (id: string) => {
        router.push(`/project/${id}`);
    };

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
                            <div
                                onClick={() =>
                                    handleProjectClick(projects[0].id)
                                }
                                className="cursor-pointer">
                                <Card>
                                    <div className="-mt-6 -mx-8 mb-4 overflow-hidden h-36">
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
