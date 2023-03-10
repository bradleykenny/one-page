import {
    faArrowRight,
    faEdit,
    faEye,
    faPencil,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import APIs from "config/APIs";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { getApiData } from "utils/http";

import Button from "@src/components/Button";
import Input from "@src/components/Input";
import Layout from "@src/components/Layout";
import Navbar from "@src/components/NavBar";
import PageCard from "@src/components/PageCard";
import Sidebar from "@src/components/Sidebar";
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
                <div className="flex w-full gap-2 rounded-t-lg border-b bg-gradient-to-b from-gray-50 to-gray-100 p-2 shadow-md">
                    <Button label="Filter" variant="plain" />
                    <Button label="Sort" variant="plain" />
                    <div className="ml-auto flex gap-2">
                        <Input type="text" placeholder="Search..." />
                        <Button label="Search" variant="plain" />
                    </div>
                </div>
                <table className="w-full table-auto overflow-hidden rounded-b-lg bg-white shadow-md">
                    <thead>
                        <tr>
                            <th className="bg-gray-50 py-3 px-4 text-left text-gray-600">
                                Name
                            </th>
                            <th className="bg-gray-50 py-3 px-4 text-left text-gray-600">
                                User
                            </th>
                            <th className="bg-gray-50 py-3 px-4 text-left text-gray-600">
                                Project
                            </th>
                            <th className="bg-gray-50 py-3 px-4 text-left text-gray-600">
                                Last updated
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
                                <tr className="m-4 border border-l-0 border-r-0 border-gray-200">
                                    <td className="py-3 px-4">
                                        <a
                                            href={`/pages/${page.id}`}
                                            className="-ml-2 rounded-lg py-1 px-2 text-indigo-700 transition-all ease-in-out hover:underline">
                                            {page.title}
                                        </a>
                                    </td>
                                    <td className="flex py-3 px-4">
                                        <div className="mr-2 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-blue-500">
                                            <FontAwesomeIcon
                                                icon={faUser}
                                                className="mt-1 h-5 w-5 text-blue-200"
                                            />
                                        </div>
                                        {page.userId}
                                    </td>
                                    <td className="py-3 px-4">
                                        {parentProject && (
                                            <a
                                                href={`/projects/${parentProject.id}`}
                                                className="inline-block rounded-md px-2 py-1 text-xs text-white"
                                                style={{
                                                    backgroundColor:
                                                        parentProject.colour,
                                                }}>
                                                {parentProject.name}
                                            </a>
                                        )}
                                    </td>
                                    <td className="py-3 px-4">
                                        {new Date(
                                            page.createdAt
                                        ).toDateString()}
                                    </td>
                                    {/* <td>
                                                <a
                                                    href={`/pages/${page.id}/edit`}
                                                    className="cursor-pointer rounded-lg py-1 px-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700">
                                                    <FontAwesomeIcon
                                                        icon={faPencil}
                                                    />
                                                </a>
                                            </td>
                                            <td>
                                                <a
                                                    href={`/pages/${page.id}/view`}
                                                    className="cursor-pointer rounded-lg py-1 px-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700">
                                                    <FontAwesomeIcon
                                                        icon={faEye}
                                                    />
                                                </a>
                                            </td> */}
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td
                                className="bg-gray-50 py-3 px-4 text-left text-gray-600"
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

const oldUI = (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link href={"/pages/new"}>
            <div className="group flex h-full w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-slate-400 bg-gradient-to-br from-slate-50 to-slate-200 text-gray-800 shadow transition-all ease-in-out hover:border-0 hover:from-indigo-500 hover:to-orange-500 hover:text-white hover:shadow-lg">
                <p className="text-md group m-0 font-semibold">New page</p>
                <span className="ml-2 transition-all group-hover:translate-x-1">
                    <FontAwesomeIcon icon={faArrowRight} />
                </span>
            </div>
        </Link>
        {[]?.map((item) => (
            <PageCard
                page={item}
                key={item.id}
                parentProject={[]?.find(
                    (project) => project.id === item.projectId
                )}
            />
        ))}
    </div>
);
