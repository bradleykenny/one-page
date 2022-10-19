import Editor from "@src/components/EditorV2";
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
        <div>
            <Navbar />
            <Sidebar />
            <div className="pt-20 pb-12">
                <Editor />
            </div>
            <SidebarInfo />
        </div>
    );
};

export default EditPage;
