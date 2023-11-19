import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import Card from "@src/components/Card";
import { PageResponse } from "@src/models/Page";
import { ProjectResponse } from "@src/models/Project";

interface Props {
    page: PageResponse;
    parentProject?: ProjectResponse;
    children?: JSX.Element;
}

const PageCard = (props: Props) => {
    const { children, page, parentProject } = props;

    return (
        <Card>
            <div className="-m-1">
                <Link
                    href={page?.id && `/pages/${page?.id}`}
                    className="mb-1 block cursor-pointer pb-1 text-2xl font-black text-indigo-700 transition ease-in-out hover:border-orange-200 hover:text-orange-400">
                    {page?.title}
                </Link>
                {parentProject && (
                    <Link
                        href={`/projects/${parentProject.id}`}
                        className="inline-block rounded-md px-2 py-1 text-xs text-white"
                        style={{ backgroundColor: parentProject.color }}>
                        {parentProject.name}
                    </Link>
                )}
                <div className="mt-2 flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200">
                        <FontAwesomeIcon
                            icon={faUser}
                            className="h-6 text-slate-500"
                        />
                    </div>
                    <div className="ml-2 flex flex-col flex-wrap">
                        <p className="m-0 text-sm">{page?.userId}</p>
                        <p className="text-sm text-gray-500">
                            {new Date(page?.createdAt).toDateString()}
                        </p>
                    </div>
                </div>
                {children}
            </div>
        </Card>
    );
};

export default PageCard;
