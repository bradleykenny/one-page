import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageResponse } from "models/Page";

import Card from "@src/components/Card";

interface Props {
    page: PageResponse;
    children?: JSX.Element;
}

const PageCard = (props: Props) => {
    const { children, page } = props;

    return (
        <Card>
            <div className="-m-1">
                <a
                    href={page?.id && `/pages/${page?.id}`}
                    className="mb-1 block cursor-pointer pb-1 text-2xl font-black text-indigo-700 transition ease-in-out hover:border-orange-200 hover:text-orange-400">
                    {page?.title}
                </a>
                <p className="inline-block rounded-md bg-lime-600 px-2 py-1 text-xs text-white">
                    {page.projectId}
                </p>
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
