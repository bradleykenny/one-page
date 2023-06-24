import { faEdit, faEye, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

import Button from "@src/components/Button";
import ContentCard from "@src/components/ContentCard";
import Layout from "@src/components/Layout";
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
                            size="sm"
                            look="soft"
                            onClick={handleEditButtonClick}>
                            <FontAwesomeIcon icon={faPencil} className="ml-1" />
                            <p className="m-0 ml-2 mr-1">Edit</p>
                        </Button>
                        <Button
                            size="sm"
                            look="soft"
                            onClick={handleViewButtonClick}>
                            <FontAwesomeIcon icon={faEye} className="ml-1" />
                            <p className="m-0 ml-2 mr-1">View</p>
                        </Button>
                    </div>
                </ContentCard>
            </div>
            <SidebarInfo page={page} project={project} />
        </Layout>
    );
};

export default Page;
