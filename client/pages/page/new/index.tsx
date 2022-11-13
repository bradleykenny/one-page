import EditorV3 from "@src/components/EditorV3";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import useApi from "@src/hooks/useApi";
import { JSONContent } from "@tiptap/react";
import { useRouter } from "next/router";
const EditPage = () => {
    const router = useRouter();

    const saveContent = async (title: string, content: JSONContent) => {
        console.log("saveContent", title, content);
        if (title && content) {
            const response = await useApi("/page/", "POST", {
                title,
                content,
            });
            const { id } = response.data;
            router.push(`/page/${id}/edit`);
        }
    };

    return (
        <div className="bg-gray-200">
            <Navbar activeTab="Projects" />
            <div className="pt-28">
                <Sidebar />
                <EditorV3 page={undefined} saveAction={saveContent} />
                <SidebarInfo />
            </div>
        </div>
    );
};

export default EditPage;
