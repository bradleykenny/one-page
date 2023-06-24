import {
    faArrowDown,
    faChevronDown,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import APIs from "config/APIs";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { getApiData } from "utils/http";

import Button from "@src/components/Button";
import FilterButton from "@src/components/FilterButton";
import Input from "@src/components/Input";
import Layout from "@src/components/Layout";
import { PageResponse } from "@src/models/Page";
import { ProjectResponse } from "@src/models/Project";

interface Props {
    pages: PageResponse[];
    projects: ProjectResponse[];
}

const Pages = (props: Props) => {
    const { pages, projects } = props;

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
                <div className="flex w-full gap-2 rounded-t-lg border-b bg-gradient-to-b from-gray-50 to-gray-100 py-2 px-4 shadow-md">
                    <p className="m-0 mr-2 self-center text-sm font-semibold text-gray-600">
                        Filters
                    </p>
                    <FilterButton name="User" />
                    <FilterButton name="Project" />
                    <div className="ml-auto flex gap-2">
                        <Input
                            type="text"
                            placeholder="Search..."
                            inputSize="sm"
                        />
                        <Button look="plain" size="sm">
                            Search
                        </Button>
                    </div>
                </div>
                <table className="w-full table-auto overflow-hidden rounded-b-lg bg-white shadow-md">
                    <thead>
                        <tr>
                            <th className="bg-gray-50 py-3 px-4 text-left">
                                <p className="m-0 mr-2 inline text-gray-600">
                                    Name
                                </p>
                                <FontAwesomeIcon
                                    icon={faArrowDown}
                                    className="inline text-gray-400"
                                />
                            </th>
                            <th className="bg-gray-50 py-3 px-4 text-left">
                                <p className="m-0 mr-2 inline text-gray-600">
                                    User
                                </p>
                                <FontAwesomeIcon
                                    icon={faArrowDown}
                                    className="inline text-gray-400"
                                />
                            </th>
                            <th className="bg-gray-50 py-3 px-4 text-left">
                                <p className="m-0 mr-2 inline text-gray-600">
                                    Project
                                </p>
                                <FontAwesomeIcon
                                    icon={faArrowDown}
                                    className="inline text-gray-400"
                                />
                            </th>
                            <th className="bg-gray-50 py-3 px-4 text-left">
                                <p className="m-0 mr-2 inline text-gray-600">
                                    Last updated
                                </p>
                                <FontAwesomeIcon
                                    icon={faArrowDown}
                                    className="inline text-gray-400"
                                />
                            </th>
                            {/* <th className="bg-gray-50"></th>
                                    <th className="bg-gray-50"></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {pages.map((page) => {
                            const parentProject = projects?.find(
                                (project) => project.id === page.projectId
                            );

                            return (
                                <tr
                                    className={
                                        "m-4 border border-l-0 border-r-0 border-gray-200"
                                    }>
                                    <td className="py-3 px-4">
                                        <a
                                            href={`/pages/${page.id}`}
                                            className="-ml-2 rounded-lg py-1 px-2 text-indigo-700 transition-all ease-in-out hover:underline">
                                            {page.title}
                                        </a>
                                    </td>
                                    <td>
                                        <div className="inline-flex items-center rounded-lg py-1 px-2 hover:bg-gray-100">
                                            <div className="mr-2 flex h-5 w-5 items-center justify-center overflow-hidden rounded-full bg-blue-500">
                                                <FontAwesomeIcon
                                                    icon={faUser}
                                                    className="mt-1 h-4 w-4 text-blue-200"
                                                />
                                            </div>
                                            {page.userId}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center py-3 px-4">
                                            {parentProject && (
                                                <a
                                                    href={`/projects/${parentProject.id}`}
                                                    className="inline-block rounded-md bg-blue-200 px-2 py-1 text-xs font-medium text-blue-600">
                                                    {parentProject.name}
                                                </a>
                                            )}
                                        </div>
                                    </td>
                                    <td className="py-3 px-4">
                                        {new Date(
                                            page.createdAt
                                        ).toDateString()}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td
                                className="bg-gray-100 py-3 px-4 text-left text-gray-600"
                                colSpan={6}>
                                Total:{" "}
                                <span className="font-bold">
                                    {pages.length}
                                </span>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </Layout>
        </div>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const pages = await getApiData<PageResponse[]>(
        context,
        APIs.pages.getByUser
    );

    const uniqueProjectIds = [...new Set(pages.map((item) => item.projectId))];
    const projects = await getApiData(context, APIs.projects.getByIds, {
        params: {
            ids: uniqueProjectIds,
        },
    });

    return {
        props: {
            pages,
            projects,
        },
    };
}

export default Pages;
