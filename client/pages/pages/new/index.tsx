import { JSONContent } from "@tiptap/react";
import { useRouter } from "next/router";

import EditorV3 from "@src/components/Editor";
import Layout from "@src/components/Layout";
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
        <Layout>
            <div className="mr-80">
                <EditorV3 page={undefined} saveAction={saveContent} />
            </div>
            <SidebarInfo />
        </Layout>
    );
};

export default NewPage;
