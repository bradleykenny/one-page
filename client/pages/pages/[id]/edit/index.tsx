import { useRouter } from "next/router";

import EditorV3 from "@src/components/EditorV3";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";

import usePage from "@src/hooks/usePage";

const EditPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { loading, page, project } = usePage(id as string);

    return (
        <div className="bg-gray-200 selection:bg-orange-200">
            <Navbar activeTab="Pages" />
            <div className="pt-24">
                <Sidebar />
                <div className="mx-80">
                    {!loading && <EditorV3 page={page} />}
                </div>
                <SidebarInfo page={page} project={project} />
            </div>
        </div>
    );
};

export default EditPage;
