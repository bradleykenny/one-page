import EditorV3 from "@src/components/EditorV3";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import useApi from "@src/hooks/useApi";
import usePage from "@src/hooks/usePage";
import { PageResponse } from "models/Page";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const EditPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { result } = usePage(id as string);

    const [receivedContent, setReceivedContent] = useState(false);
    const [data, setData] = useState<PageResponse>(undefined);

    useEffect(() => {
        const getData = async () => {
            if (id) {
                const result = await useApi(`/page/${id}`, "GET");
                const { data } = result;
                setData(data);
                setReceivedContent(true);
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
                {receivedContent && (
                    <EditorV3 page={data} saveAction={saveContent} />
                )}
                <SidebarInfo />
            </div>
        </div>
    );
};

export default EditPage;
