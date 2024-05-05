import { JSONContent } from "@tiptap/react";
import Head from "next/head";
import { useRouter } from "next/router";

import { ReactElement } from "react";

import EditorV3 from "@src/components/Editor";
import Layout from "@src/components/Layout";
import SidebarInfo from "@src/components/SidebarInfo";
import useApi from "@src/hooks/useApi";

const NewPage = () => {
    const router = useRouter();

    const saveContent = async (title: string, content: JSONContent) => {
        if (title && content) {
            const response = await useApi({
                route: "/page/",
                requestType: "POST",
                data: {
                    title,
                    content,
                },
            });

            const { id } = response.data;
            router.push(`/pages/${id}/edit`);
        }
    };

    return (
        <div>
            <div className="mr-80">
                <EditorV3 page={undefined} saveAction={saveContent} />
            </div>
            <SidebarInfo />
        </div>
    );
};

NewPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <Head>
                <title>one:page | new page</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Layout>{page}</Layout>
        </>
    );
};

export default NewPage;
