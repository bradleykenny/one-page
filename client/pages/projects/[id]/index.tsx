import { faIcons, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectResponse } from "models/Project";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { getApiData } from "utils/http";

import Card from "@src/components/Card";
import Navbar from "@src/components/NavBar";
import PageCard from "@src/components/PageCard";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import { PageResponse } from "@src/models/Page";

interface Props {
    project: ProjectResponse;
    pages: PageResponse[];
}

function Project(props: Props) {
    const { project, pages } = props;

    return (
        <div>
            <Head>
                <title>one:page | home</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className="min-h-screen bg-gray-200">
                <Navbar />
                <div className="pt-24">
                    <Sidebar />
                    <div className="mx-80 pb-6">
                        {project && (
                            <Card>
                                <div className="-mx-8 -mt-6 mb-4 h-48 overflow-hidden">
                                    {project.imageUrl ? (
                                        <div
                                            className="relative h-full w-full bg-cover bg-center transition-all ease-in-out hover:scale-105"
                                            style={{
                                                backgroundImage: `url('${project.imageUrl}')`,
                                            }}
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center bg-orange-100 text-orange-300">
                                            <FontAwesomeIcon
                                                icon={faIcons}
                                                size={"3x"}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="-mx-2">
                                    <h1>
                                        {project.name}
                                        {project.access === "PRIVATE" && (
                                            <FontAwesomeIcon
                                                icon={faLock}
                                                size="xs"
                                                className="ml-2 text-slate-500"
                                            />
                                        )}
                                    </h1>
                                    <p className="m-0 text-gray-500">
                                        {project.description}
                                    </p>
                                </div>
                            </Card>
                        )}
                        <h1 className="pt-6 pl-6 pb-2">Pages</h1>
                        {project && (
                            <div className="grid grid-cols-2 gap-4">
                                {pages?.map((page) => (
                                    <PageCard
                                        page={page}
                                        parentProject={project}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                    <SidebarInfo />
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const queryId = context.query.id;
    const project = await getApiData<ProjectResponse>(
        context,
        `/project/${queryId}`
    );

    const pages = await getApiData<PageResponse[]>(
        context,
        `/page/project/${project.id}`
    );

    return {
        props: {
            project,
            pages,
        },
    };
}

export default Project;
