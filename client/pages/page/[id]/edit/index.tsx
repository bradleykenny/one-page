import EditorV3 from "@src/components/EditorV3";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import usePage from "@src/hooks/usePage";
import { useRouter } from "next/router";
const EditPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { result } = usePage(id as string);

    return (
        <div className="bg-gray-200">
            <Navbar activeTab="Projects" />
            <div className="pt-28">
                <Sidebar />
                <EditorV3 />
                <SidebarInfo />
            </div>
        </div>
    );
};

export default EditPage;
