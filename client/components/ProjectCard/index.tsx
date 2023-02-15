import { faIcons, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectResponse } from "models/Project";
import { useRouter } from "next/router";

import Card from "@src/components/Card";

interface Props {
    project: ProjectResponse;
}

const ProjectCard = (props: Props) => {
    const { project } = props;
    const router = useRouter();

    const handleProjectClick = (id: string) => {
        router.push(`/projects/${id}`);
    };

    return (
        <div
            onClick={() => handleProjectClick(project.id)}
            className="group cursor-pointer">
            <Card>
                <div className="-mx-8 -mt-6 mb-4 h-36 overflow-hidden">
                    {project.imageUrl ? (
                        <div
                            className="relative h-full w-full bg-cover bg-center transition-all ease-in-out group-hover:scale-105"
                            style={{
                                backgroundImage: `url('${project.imageUrl}')`,
                            }}
                        />
                    ) : (
                        <div
                            className="flex h-full w-full items-center justify-center bg-opacity-50 text-white text-opacity-75"
                            style={{ backgroundColor: project.colour }}>
                            <FontAwesomeIcon icon={faIcons} size={"3x"} />
                        </div>
                    )}
                </div>
                <div className="-mx-2">
                    <h2>
                        {project.colour && (
                            <div
                                style={{ backgroundColor: project.colour }}
                                className="mr-2 inline-block h-4 w-4 rounded"
                            />
                        )}
                        {project.name}
                        {project.access === "PRIVATE" && (
                            <FontAwesomeIcon
                                icon={faLock}
                                size="xs"
                                className="ml-2"
                            />
                        )}
                    </h2>
                    <p className="m-0 truncate text-gray-500">
                        {project.description}
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default ProjectCard;
