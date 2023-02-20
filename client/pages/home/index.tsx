import ContentCard from "@src/components/ContentCard";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import useAllPages from "@src/hooks/useAllPages";
import Head from "next/head";

const Home = () => {
    const { result } = useAllPages();

    return (
        <div>
            <Head>
                <title>one:page | home</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className="min-h-screen bg-gray-200">
                <Navbar />
                <div className="pt-24">
                    <Sidebar />
                    <div className="mx-4 md:mx-80">
                        {result?.map((item) => (
                            <div className="mb-4">
                                <ContentCard page={item} />
                            </div>
                        ))}
                        <h2 className="pt-4 pb-16 text-center text-gray-500">
                            that's all folks 👋
                        </h2>
                    </div>
                    <SidebarInfo />
                </div>
            </div>
        </div>
    );
};

export default Home;
