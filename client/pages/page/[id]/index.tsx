import MarkdownCard from "@src/components/MarkdownCard";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import usePage from "@src/hooks/usePage";
import { useRouter } from "next/router";
import { mdSample1 } from "test/markdown-content";

const Page = () => {
    const router = useRouter();
    const queryId = router.query?.id;

    const { result } = usePage(queryId as string);

    const parsedText = result?.content?.replace("\\n", "\n");

    return (
        <div className="bg-gray-200 min-h-screen">
            <Navbar activeTab="Projects" />
            <Sidebar />
            <div className="pt-28 pb-12">
                <MarkdownCard
                    title={result?.title}
                    id={result?.id}
                    markdown={parsedText || mdSample1("Soph")}
                />
                <div className="w-6/12 mx-auto p-8 pt-4">
                    <a
                        href={queryId && `/page/${queryId}/edit`}
                        className="bg-indigo-500 text-white rounded-md py-2 px-4 shadow">
                        Edit
                    </a>
                </div>
            </div>
            <SidebarInfo />
        </div>
    );
};

export default Page;
