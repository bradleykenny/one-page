import { useRouter } from "next/router";

import EditorV3 from "@src/components/Editor";
import Layout from "@src/components/Layout";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import usePage from "@src/hooks/usePage";

const EditPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { loading, page, project } = usePage(id as string);

    return (
        <Layout>
            <div className="mr-80">{!loading && <EditorV3 page={page} />}</div>
            <SidebarInfo page={page} project={project} />
        </Layout>
    );
};

export default EditPage;
