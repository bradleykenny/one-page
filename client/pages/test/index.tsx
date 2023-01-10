import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                    <div className="p-6 mx-80 z-0 bg-white shadow rounded-lg">
                        <Input type="text" label="Name" placeholder="Brad" />
                        <div className="flex items-center space-x-2 pt-4">
                            <input
                                type="checkbox"
                                id="example1"
                                className="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
                            />
                            <label
                                htmlFor="example1"
                                className="text-sm font-medium text-gray-700">
                                Default
                            </label>
                        </div>
                    </div>
                    <SidebarInfo />
                </div>
            </div>
        </div>
    );
};

export default Test;
