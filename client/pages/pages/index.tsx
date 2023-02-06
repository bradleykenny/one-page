import { Pacifico } from "@next/font/google";
import jwt from "jsonwebtoken";
import Head from "next/head";
import Link from "next/link";

import { useEffect, useState } from "react";

import ContentCard from "@src/components/ContentCard";
import Navbar from "@src/components/NavBar";
import PageCard from "@src/components/PageCard";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import useApi from "@src/hooks/useApi";

const Pages = () => {
    const [data, setData] = useState([]);

    // TODO: cant use til next 13
    // const pacifico = Pacifico({ weight: "400" });

    useEffect(() => {
        const getData = async () => {
            const token = localStorage.getItem("token");
            const decoded = jwt.decode(token);

            const userId = decoded?.["username"];
            const response = await useApi(`page/user/${userId}`, "GET");

            if (response && response.data) {
                setData(response.data);
            }
        };

        getData();
    }, []);

    return (
        <div>
            <Head>
                <title>one:page | pages</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className="min-h-screen bg-gray-200">
                <Navbar activeTab="Pages" />
                <div className="pt-24">
                    <Sidebar />
                    <div className="mx-80 pb-4">
                        <div className="grid grid-cols-2 gap-4">
                            <Link
                                className="group flex h-full w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-slate-400 bg-gradient-to-br from-slate-50 to-slate-200 shadow transition-all ease-in-out hover:border-0 hover:from-indigo-500 hover:to-blue-500 hover:shadow-lg"
                                href={"/pages/new"}>
                                <p className="text-md font-semibold text-gray-800 group-hover:text-white">
                                    New page
                                </p>
                            </Link>
                            {data?.map((item) => (
                                <PageCard page={item} key={item.id} />
                            ))}
                            {data?.map((item) => (
                                <PageCard page={item} key={item.id} />
                            ))}
                        </div>
                    </div>
                    <SidebarInfo />
                </div>
            </div>
        </div>
    );
};

export default Pages;
