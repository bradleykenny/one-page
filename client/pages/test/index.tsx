import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@src/components/Button";
import Checkbox from "@src/components/Checkbox";
import Input from "@src/components/Input";
import CreateProjectModal from "@src/components/Modal/CreateProject";
import Navbar from "@src/components/NavBar";
import ProjectCard from "@src/components/ProjectCard";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import useApi from "@src/hooks/useApi";
import { ProjectResponse } from "models/Project";
import Head from "next/head";
import { useEffect, useState } from "react";

const Test = () => {
    const [checked, setChecked] = useState(false);

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
                    <div className="p-6 mx-80 z-0 bg-white shadow rounded-lg flex flex-col gap-4">
                        <Input type="text" label="Name" placeholder="John Smith" />
                        <Input
                            type="text"
                            label="Address"
                            placeholder="123 Example Street, STA"
                        />
                        <Input
                            type="text"
                            label="Information"
                            placeholder="Some more"
                        />
                        <Checkbox
                            checked={checked}
                            onClick={() => setChecked(!checked)}
                        />
                        <div className="grid grid-cols-4 gap-x-4">
                            <Button label="Solid" variant="solid" />
                            <Button label="Soft" variant="soft" />
                            <Button label="Ghost" variant="ghost" />
                            <Button label="Plain" variant="plain" />
                        </div>
                        <div className="flex">
                            <Button label="Submit" variant="solid" />
                        </div>
                    </div>
                    <SidebarInfo />
                </div>
            </div>
        </div>
    );
};

export default Test;
