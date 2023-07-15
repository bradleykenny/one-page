import APIs from "config/APIs";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { getApiData } from "utils/http";

import { useState } from "react";

import Button from "@src/components/Button";
import FilterButton from "@src/components/FilterButton";
import Input from "@src/components/Input";
import Layout from "@src/components/Layout";
import RecentPages from "@src/components/RecentPages";
import Table from "@src/components/Table";
import { PageResponse, PageResponseWithProjectInfo } from "@src/models/Page";
import { ProjectResponse } from "@src/models/Project";

interface Props {
    pages: PageResponseWithProjectInfo[];
}

const Pages = (props: Props) => {
    const { pages } = props;

    const [data, setData] = useState(pages);

    return (
        <div>
            <Head>
                <title>one:page | pages</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Layout>
                <RecentPages />
                <Table data={data} columns={null} />
            </Layout>
        </div>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const pages = await getApiData<PageResponse[]>(context, APIs.pages.getAll);

    const uniqueProjectIds = [...new Set(pages.map((item) => item.projectId))];
    const projects: ProjectResponse[] = await getApiData(context, APIs.projects.getByIds, {
        params: {
            ids: uniqueProjectIds,
        },
    });

    const pagesWithProjectInfo = pages.map(page => {
        const parentProject = projects?.find(
            (project) => project.id === page.projectId
        );

        const newPage = {
            ...page,
            project: parentProject || null
        }
        
        return newPage;
    });

    return {
        props: {
            pages: pagesWithProjectInfo,
        },
    };
}

export default Pages;
