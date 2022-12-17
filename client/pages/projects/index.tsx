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
    const result = fakePagesData;
    const [projects, setProjects] = useState<ProjectResponse[]>([]);

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        const getProjects = async () => {
            const projectsResponse = await useApi("project/all", "GET");
            setProjects(projectsResponse.data);
        }

        getProjects();
    }, []);

    const pageCards = projects?.map((item) => {
        return (
            <div>
                <Card>
                    <img src="" />
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                </Card>
            </div>
        );
    });

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
                        <div
                            className="mb-4 py-8 text-white bg-gradient-to-br from-indigo-500 to-orange-500 rounded-lg text-center flex items-center justify-center shadow-sm hover:shadow-md cursor-pointer"
                            onClick={handleShowModal}>
                            <h1 className="text-white mb-0 inline mr-4">
                                Start new project
                            </h1>
                            <FontAwesomeIcon icon={faArrowRight} size={"xl"} />
                        </div>
                        <CreateProjectModal
                            showModal={showModal}
                            handleShowModal={handleShowModal}
                        />
                        <div className="grid grid-cols-2 gap-4">
                            {pageCards}
                        </div>
                    </div>
                    <SidebarInfo />
                </div>
            </div>
        </div>
    );
};

export default Projects;
