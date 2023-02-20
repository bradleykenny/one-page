import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectResponse } from "models/Project";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { getApiData } from "utils/http";

import { useState } from "react";

import CreateProjectModal from "@src/components/Modal/CreateProject";
import Navbar from "@src/components/NavBar";
import ProjectCard from "@src/components/ProjectCard";
import Sidebar from "@src/components/Sidebar";
import { useRouter } from "next/router";

interface Props {
    projects: ProjectResponse[];
}

function Projects(props: Props) {
    const { projects } = props;
    
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(!showModal);
    };

    const { isReady } = useRouter();

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
                    <div className="ml-80 mr-4 pb-6">
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
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {projects?.map((item) => (
                                <ProjectCard project={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const projects = await getApiData<ProjectResponse[]>(
        context,
        "/project/all?limit=100"
    );

    return {
        props: {
            projects,
        },
    };
}

export default Projects;
