import { PageResponse } from "models/Page";

import Card from "@src/components/Card";

interface Props {
    page: PageResponse;
    children?: JSX.Element;
}

const PageCard = (props: Props) => {
    const { children, page } = props;

    const infoBadges = [
        page?.userId,
        new Date(page?.createdAt).toDateString(),
        page.projectId,
        "/" + page.id,
    ];

    return (
        <Card>
            <div className="-m-1">
                <a
                    href={page?.id && `/pages/${page?.id}`}
                    className="mb-1 inline-block cursor-pointer pb-1 text-2xl font-black text-indigo-700 transition ease-in-out hover:border-orange-200 hover:text-orange-400">
                    {page?.title}
                </a>
                <div className="mt-2 flex flex-row flex-wrap gap-2">
                    {infoBadges.map((item) => (
                        <p className="m-0 inline cursor-pointer rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-400 hover:text-gray-600">
                            {item}
                        </p>
                    ))}
                </div>
                {children}
            </div>
        </Card>
    );
};

export default PageCard;
