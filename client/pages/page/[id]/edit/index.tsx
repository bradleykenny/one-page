import EditorV3 from "@src/components/EditorV3";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import useApi from "@src/hooks/useApi";
import { PageResponse } from "models/Page";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const EditPage = () => {
    const router = useRouter();
    const { id } = router.query;

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

    return (
        <div className="bg-gray-200">
            <Navbar activeTab="Projects" />
            <div className="pt-24">
                <Sidebar />
                <div className="mx-80">
                    {receivedContent && (
                        <EditorV3 page={data} />
                    )}
                </div>
                <SidebarInfo />
            </div>
        </div>
    );
};

export default EditPage;
