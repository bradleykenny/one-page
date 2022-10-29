import MarkdownCard from "@src/components/MarkdownCard";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import useAllPages from "@src/hooks/useAllPages";
import Head from "next/head";
import { mdSample1 } from "test/markdown-content";

const Page = () => {
    const { result } = useAllPages();

    const markdownCards = result?.map((item) => {
        const { content, id, title } = item;
        return (
            <div className="mb-8">
                <MarkdownCard
                    id={id}
                    title={title}
                    markdown={content || mdSample1("Soph")}
                />
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
                <Navbar activeTab="Home" />
                <div className="pt-28">
                    <Sidebar />
                    <div className="pb-6">{markdownCards}</div>
                    <SidebarInfo />
                </div>
            </div>
        </div>
    );
};

export default Page;
