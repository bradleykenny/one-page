import { useRouter } from "next/router";

import Button from "@src/components/Button";
import ContentCard from "@src/components/ContentCard";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import usePage from "@src/hooks/usePage";

const Page = () => {
    const router = useRouter();
    const queryId = router.query?.id;

    const { page, project } = usePage(queryId as string);

    const handleEditButtonClick = () => {
        if (queryId) {
            router.push(`/pages/${queryId}/edit`);
        }
    };

    const handleViewButtonClick = () => {
        if (queryId) {
            router.push(`/pages/${queryId}/view`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-200">
            <Navbar activeTab="Pages" />
            <Sidebar />
            <div className="mx-80 pt-24 pb-12">
                <ContentCard page={page}>
                    <div className="mx-auto pt-4 gap-2 flex">
                        <Button
                            label="Edit"
                            variant="soft"
                            onClick={handleEditButtonClick}
                        />
                        <Button
                            label="View"
                            variant="solid"
                            onClick={handleViewButtonClick}
                        />
                    </div>
                </ContentCard>
            </div>
            <SidebarInfo page={page} project={project} />
        </div>
    );
};

export default Page;
