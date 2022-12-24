import ContentCard from "@src/components/ContentCard";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import useAllPages from "@src/hooks/useAllPages";
import Head from "next/head";

const Pages = () => {
    const { result } = useAllPages();

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
                    <div className="pb-6 mx-80">
                        <h1 className="p-4 pl-8">Your Pages</h1>
                        <div className="lg:columns-2">
                        {result?.map((item) => (
                            <div className="mb-4">
                                <ContentCard page={item} />
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
