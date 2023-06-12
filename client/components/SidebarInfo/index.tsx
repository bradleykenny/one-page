import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageResponse } from "models/Page";
import { ProjectResponse } from "models/Project";

import { useState } from "react";

import InlineEditSelector from "@src/components/InlineEditSelector";
import Selector from "@src/components/Selector";
import useApi from "@src/hooks/useApi";

import { shouldTextBeDark } from "../../utils/colour";

interface IProps {
    page?: PageResponse;
    project?: ProjectResponse;
}

const SidebarInfo = (props: IProps) => {
    const { page, project } = props;

    const [isLoadingProjects, setIsLoadingProjects] = useState(false);
    const [projectSelectorItems, setProjectSelectorItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showProjectSelector, setShowProjectSelector] = useState(false);

    const isTextDark = shouldTextBeDark(project?.colour);

    // TODO: this needs to be memoised so we aren't refetching everytime
    const handleOpenProjectSelector = async () => {
        setShowProjectSelector(true);
        setIsLoadingProjects(true);

        const allProjects = await useApi("/project/all?limit=100", "GET");
        console.log(allProjects);
        const mutatedSelectorProjects = allProjects.data?.map((project) => ({
            id: project.id,
            name: project.name,
            colour: project.colour,
        }));
        setProjectSelectorItems(mutatedSelectorProjects);

        setIsLoadingProjects(false);
    };

    const handleProjectSelectorItemSelect = async (value: string) => {
        await useApi("/page/link-project", "POST", {
            pageId: page.id,
            projectId: value,
        });
    };

    const handleProjectSelectorClose = () => {
        setShowProjectSelector(false);
    };

    return (
        <aside
            className="fixed top-8 right-8 z-0 hidden w-72 overflow-y-scroll rounded-lg bg-white px-1 pb-4 shadow hover:shadow-md md:block"
            aria-label="Sidebar">
            <h2 className="mb-2 ml-4 py-2 text-lg font-bold">Information</h2>
            <ul className="space-y-2 px-4">
                <li>
                    <h3>User</h3>
                    <p>{page?.userId || "TBD"}</p>
                </li>
                <li>
                    <h3>Project</h3>
                    <div className="flex flex-col">
                        <p
                            className="group mt-1 inline-block cursor-pointer self-start rounded-lg px-3 py-1 text-sm transition-all"
                            style={{
                                backgroundColor: project?.colour || "gray",
                                color: isTextDark ? "black" : "white",
                            }}>
                            {project?.name || "TBD"}
                            <FontAwesomeIcon
                                icon={faPencil}
                                className="ml-2 hidden group-hover:inline-block"
                                onClick={handleOpenProjectSelector}
                            />
                        </p>
                        {showProjectSelector && (
                            <span className="fixed mt-10 mr-6 justify-start">
                                {/* <Selector
                                    items={projectSelectorItems}
                                    isLoading={isLoadingProjects}
                                    onSelect={handleProjectSelectorItemSelect}
                                    onClose={handleProjectSelectorClose}
                                /> */}
                                <InlineEditSelector
                                    items={projectSelectorItems}
                                    onSelect={handleProjectSelectorItemSelect}
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
