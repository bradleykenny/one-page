import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import APIs from "config/APIs";
import jwt from "jsonwebtoken";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import Head from "next/head";
import Link from "next/link";

import Navbar from "@src/components/NavBar";
import PageCard from "@src/components/PageCard";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import { PageResponse } from "@src/models/Page";

import { authOptions } from "../api/auth/[...nextauth]";

interface Props {
    pages: PageResponse[];
}

const Pages = (props: Props) => {
    const { pages } = props;

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
                <Navbar />
                <div className="pt-24">
                    <Sidebar />
                    <div className="mx-80 pb-4">
                        <div className="grid grid-cols-2 gap-4">
                            <Link href={"/pages/new"}>
                                <div className="group flex h-full w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-slate-400 bg-gradient-to-br from-slate-50 to-slate-200 text-gray-800 shadow transition-all ease-in-out hover:border-0 hover:from-indigo-500 hover:to-orange-500 hover:text-white hover:shadow-lg">
                                    <p className="text-md group m-0 font-semibold">
                                        New page
                                    </p>
                                    <span className="ml-2 transition-all group-hover:translate-x-1">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </span>
                                </div>
                            </Link>
                            {pages?.map((item) => (
                                <PageCard page={item} key={item.id} />
                            ))}
                            {pages?.map((item) => (
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const session = await getServerSession(context.req, context.res, authOptions);
    const { token } = session["token"];

    let headers = {};
    if (token) {
        headers = {
            Authorization: `Bearer ${token}`,
        };
    }

    const decodedJwt = jwt.decode(token);
    const userId = decodedJwt?.["username"];

    const pages = await axios.get(
        apiUrl.concat(APIs.pages.getByUser, `/${userId}`),
        {
            headers,
        }
    );

    return {
        props: {
            pages: pages.data,
        },
    };
}

export default Pages;
