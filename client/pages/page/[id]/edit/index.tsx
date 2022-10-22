import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import usePage from "@src/hooks/usePage";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const EditPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { result } = usePage(id as string);

    const DynamicRenderedEditor = dynamic(
        () => import("@src/components/EditorV2"),
        { ssr: false }
    );

    return (
        <div className="bg-gray-100">
            <Navbar activeTab="Projects" />
            <div className="pt-32">
                <Sidebar />
                <DynamicRenderedEditor />
                <SidebarInfo />
            </div>
        </div>
    );
};

export default EditPage;
