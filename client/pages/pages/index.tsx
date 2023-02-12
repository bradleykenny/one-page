import axios from "axios";
import APIs from "config/APIs";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@src/components/NavBar";
import PageCard from "@src/components/PageCard";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import { PageResponse } from "@src/models/Page";

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
                            <Link
                                className="group flex h-full w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-slate-400 bg-gradient-to-br from-slate-50 to-slate-200 shadow transition-all ease-in-out hover:border-0 hover:from-indigo-500 hover:to-blue-500 hover:shadow-lg"
                                href={"/pages/new"}>
                                <p className="text-md font-semibold text-gray-800 group-hover:text-white">
                                    New page
                                </p>
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

export async function getStaticProps() {
    const result = await axios.get(APIs.pages.getByUser + "?");

    return {
        props: {
            pages: result?.data,
        },
    };
}

export default Pages;
