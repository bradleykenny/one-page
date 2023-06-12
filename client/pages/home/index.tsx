import Head from "next/head";

import ContentCard from "@src/components/ContentCard";
import Layout from "@src/components/Layout";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import useAllPages from "@src/hooks/useAllPages";

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
            <Layout>
                <div className="mx-4 md:mr-80">
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
            </Layout>
        </div>
    );
};

export default Home;
