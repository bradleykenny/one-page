import ContentCard from "@src/components/ContentCard";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import usePage from "@src/hooks/usePage";
import { useRouter } from "next/router";

const Page = () => {
    const router = useRouter();
    const queryId = router.query?.id;

    const { page, project } = usePage(queryId as string);

    return (
        <div className="min-h-screen bg-gray-200">
            <Navbar activeTab="Pages" />
            <Sidebar />
            <div className="mx-80 pt-24 pb-12">
                <ContentCard page={page}>
                    <div className="mx-auto pt-4">
                        <a
                            href={queryId && `/pages/${queryId}/edit`}
                            className="rounded-md bg-indigo-500 py-2 px-4 text-white shadow hover:bg-indigo-600"
                        >
                            Edit
                        </a>
                    </div>
                </ContentCard>
            </div>
            <SidebarInfo page={page} project={project} />
        </div>
    );
};

export default Page;
