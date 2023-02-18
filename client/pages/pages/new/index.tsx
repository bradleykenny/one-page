import { JSONContent } from "@tiptap/react";
import { useRouter } from "next/router";

import EditorV3 from "@src/components/Editor";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import useApi from "@src/hooks/useApi";

const NewPage = () => {
    const router = useRouter();

    const saveContent = async (title: string, content: JSONContent) => {
        if (title && content) {
            const response = await useApi("/page/", "POST", {
                title,
                content,
            });
            const { id } = response.data;
            router.push(`/pages/${id}/edit`);
        }
    };

    return (
        <div className="bg-gray-200">
            <Navbar />
            <div className="pt-24">
                <Sidebar />
                <div className="mx-4 md:mx-80">
                    <EditorV3 page={undefined} saveAction={saveContent} />
                </div>
                <SidebarInfo />
            </div>
        </div>
    );
};

export default NewPage;
