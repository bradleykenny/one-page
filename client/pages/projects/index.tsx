import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectResponse } from "models/Project";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { getApiData } from "utils/http";

import { ReactElement, useState } from "react";

import Layout from "@src/components/Layout";
import CreateProjectModal from "@src/components/Modal/CreateProject";
import ProjectCard from "@src/components/ProjectCard";

interface Props {
    projects: ProjectResponse[];
}

function Projects(props: Props) {
    const { projects } = props;

    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <div
                className="group sticky top-0 z-50 -mx-8 -mt-8 mb-4 flex cursor-pointer items-center justify-center bg-gradient-to-br from-primary-400/90 to-primary-700/90 py-8 text-center text-white shadow backdrop-blur-sm hover:shadow-md"
                onClick={handleShowModal}>
                <h1 className="mb-0 mr-2 inline text-lg font-semibold text-white">
                    Start new project
                </h1>
                <span className="transition-all group-hover:translate-x-1">
                    <FontAwesomeIcon icon={faArrowRight} size={"lg"} />
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
    );
}

Projects.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <Head>
                <title>one:page | home</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Layout>{page}</Layout>
        </>
    );
};

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
