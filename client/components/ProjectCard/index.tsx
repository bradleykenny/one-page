import { faIcons, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "@src/components/Card";
import { ProjectResponse } from "models/Project";
import { useRouter } from "next/router";

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
            className="cursor-pointer">
            <Card>
                <div className="-mt-6 -mx-8 mb-4 overflow-hidden h-36">
                    {project.imageUrl ? (
                        <img
                            src={project.imageUrl}
                            className="bg-cover w-full"
                        />
                    ) : (
                        <div className="bg-orange-100 w-full h-full flex items-center justify-center text-orange-300">
                            <FontAwesomeIcon icon={faIcons} size={"3x"} />
                        </div>
                    )}
                </div>
                <div className="-mx-2">
                    <h2>
                        {project.colour && (
                            <div
                                style={{ backgroundColor: project.colour }}
                                className="w-4 h-4 inline-block rounded mr-2"
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
                    <p className="m-0 text-gray-500 truncate">
                        {project.description}
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default ProjectCard;
