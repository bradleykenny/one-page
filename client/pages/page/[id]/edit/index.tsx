import EditorV3 from "@src/components/EditorV3";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import useApi from "@src/hooks/useApi";
import usePage from "@src/hooks/usePage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const EditPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { result } = usePage(id as string);

    const [content, setContent] = useState("");

    useEffect(() => {
        const getData = async () => {
            if (id) {
                const result = await useApi(`/page/${id}`, "GET");
                const { content } = result.data;
                setContent(content);
            }
        };

        getData();
    }, [id]);

    const saveContent = async (title: string, content: string) => {
        await useApi("/pages/save", "POST", { title, content });
    };

    return (
        <div className="bg-gray-200">
            <Navbar activeTab="Projects" />
            <div className="pt-28">
                <Sidebar />
                <EditorV3 initialContent={content} saveAction={saveContent} />
                <SidebarInfo />
            </div>
        </div>
    );
};

export default EditPage;
