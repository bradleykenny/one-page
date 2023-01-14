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
            <div className="bg-gray-200 min-h-screen">
                <Navbar activeTab="Home" />
                <div className="pt-24">
                    <Sidebar />
                    <div className="md:mx-80 mx-4">
                        {result?.map((item) => (
                            <div className="mb-4">
                                <ContentCard page={item} />
                            </div>
                        ))}
                        <h2 className="text-center pt-4 pb-16 text-gray-500 drop-shadow">
                            {"that's all folks 👋".split("").map((l) => (
                                <span className="hover:text-indigo-500">
                                    {l}
                                </span>
                            ))}
                        </h2>
                    </div>
                    <SidebarInfo />
                </div>
            </div>
        </div>
    );
};

export default Home;
