import { useRouter } from "next/router";

import Button from "@src/components/Button";
import ContentCard from "@src/components/ContentCard";
import Layout from "@src/components/Layout";
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
        <Layout>
            <div className="mr-80">
                <ContentCard page={page}>
                    <div className="mx-auto flex gap-2 pt-4">
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
        </Layout>
    );
};

export default Page;
