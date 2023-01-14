import { PageResponse } from "models/Page";
import { ProjectResponse } from "models/Project";

import ColourUtil from "../../utils/colour";
import Selector from "@src/components/Selector";
import { useState } from "react";

interface IProps {
    page?: PageResponse;
    project?: ProjectResponse;
}

const SidebarInfo = (props: IProps) => {
    const { page, project } = props;

    const [showProjectSelector, setShowProjectSelector] = useState(false);

    const shouldTextBeDark = ColourUtil.shouldTextBeDark(project?.colour);

    return (
        <aside
            className="hidden md:block w-72 fixed top-24 right-4 overflow-y-scroll px-1 pb-4 z-0 bg-white shadow rounded-lg hover:shadow-md"
            aria-label="Sidebar">
            <h2 className="text-lg font-bold mb-2 ml-4 py-2">Information</h2>
            <ul className="space-y-2 px-4">
                <li>
                    <h3>User</h3>
                    <p>{page?.userId || "TBD"}</p>
                </li>
                <li>
                    <h3>Project</h3>
                    <div className="flex flex-col">
                        <p
                            className="rounded-lg mt-1 px-3 py-1 inline-block text-sm cursor-pointer self-start"
                            onClick={() => {
                                setShowProjectSelector(true);
                            }}
                            style={{
                                backgroundColor: project?.colour || 'gray',
                                color: shouldTextBeDark ? "black" : "white",
                            }}>
                            {project?.name || 'TBD'}
                        </p>
                        {showProjectSelector && (
                            <span className="fixed mt-10 justify-start mr-6">
                                <Selector
                                    items={[
                                        { label: "one", value: undefined },
                                        { label: "two", value: undefined },
                                        { label: "three", value: undefined },
                                        { label: "four", value: undefined },
                                        { label: "five", value: undefined },
                                        { label: "six", value: undefined },
                                        { label: "seven", value: undefined },
                                        { label: "eight", value: undefined },
                                    ]}
                                    onClose={() => {
                                        setShowProjectSelector(false);
                                    }}
                                />
                            </span>
                        )}
                    </div>
                </li>
                <li>
                    <h3>Last Updated</h3>
                    <p>{new Date(page?.updatedAt).toDateString()}</p>
                </li>
                <li>
                    <h3>Created On</h3>
                    <p>{new Date(page?.createdAt).toDateString()}</p>
                </li>
            </ul>
        </aside>
    );
};

export default SidebarInfo;
