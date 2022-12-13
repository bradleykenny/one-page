import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "@src/components/Card";
import ContentCard from "@src/components/ContentCard";
import MagicButton from "@src/components/MagicButton";
import Modal from "@src/components/Modal";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import useAllPages from "@src/hooks/useAllPages";
import Head from "next/head";

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

    const pageCards = result?.map((item) => {
        return (
            <div>
                <Card>
                    <img src="" />
                    <h1>{item.name}</h1>
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
                        <div className="mb-4 py-8 text-white bg-gradient-to-br from-indigo-500 to-orange-500 rounded-lg text-center flex items-center justify-center shadow-sm hover:shadow-md">
                            <h1 className="text-white mb-0 inline mr-4">
                                Create new project
                            </h1>
                            <FontAwesomeIcon icon={faArrowRight} size={"xl"} />
                        </div>
                        <Modal visible>
                            <div className="flex flex-col">
                                <h1>Hello</h1>
                                <input type="text" className="border mb-4" placeholder="Name" />
                                <input type="text" className="border mb-4" placeholder="Description" />
                                <button className="bg-gray-200 mb-4">Submit</button>
                            </div>
                        </Modal>
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
