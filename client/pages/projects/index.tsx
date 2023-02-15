import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectResponse } from "models/Project";
import Head from "next/head";

import { useEffect, useState } from "react";

import CreateProjectModal from "@src/components/Modal/CreateProject";
import Navbar from "@src/components/NavBar";
import ProjectCard from "@src/components/ProjectCard";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import useApi from "@src/hooks/useApi";

const Projects = () => {
    const [projects, setProjects] = useState<ProjectResponse[]>([]);
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        const getProjects = async () => {
            // TODO: temporary until i add pagination
            const projectsResponse = await useApi(
                "/project/all?limit=100",
                "GET"
            );
            setProjects(projectsResponse?.data);
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
            <div className="min-h-screen bg-gray-200">
                <Navbar />
                <div className="pt-24">
                    <Sidebar />
                    <div className="mx-80 pb-6">
                        <div
                            className="group mb-4 flex cursor-pointer items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-orange-500 py-8 text-center text-white shadow hover:shadow-md"
                            onClick={handleShowModal}>
                            <h1 className="mb-0 mr-2 inline text-lg font-semibold text-white">
                                Start new project
                            </h1>
                            <span className="transition-all group-hover:translate-x-1">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    size={"lg"}
                                />
                            </span>
                        </div>
                        <CreateProjectModal
                            showModal={showModal}
                            handleShowModal={handleShowModal}
                        />
                        <div className="grid grid-cols-2 gap-4">
                            {projects?.map((item) => (
                                <ProjectCard project={item} />
                            ))}
                        </div>
                    </div>
                    <SidebarInfo />
                </div>
            </div>
        </div>
    );
};

export default Projects;
