import ContentCard from "@src/components/ContentCard";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import useApi from "@src/hooks/useApi";
import Head from "next/head";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

import { Pacifico } from "@next/font/google";

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
            <div className="bg-gray-200 min-h-screen">
                <Navbar activeTab="Pages" />
                <div className="pt-24">
                    <Sidebar />
                    <div className="pb-4 mx-80">
                        <h1 className="p-4 pl-8">My Pages</h1>
                        <div className="lg:columns-2">
                            {data?.map((item) => (
                                <div className="mb-4">
                                    <ContentCard page={item} key={item.id} />
                                </div>
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
