import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { cn } from "utils";

interface SidebarItemProps {
    title: string;
    url: string;
    icon: IconDefinition;
}

const SidebarItem = (props: SidebarItemProps) => {
    const { icon, title, url } = props;

    const router = useRouter();
    const { pathname } = router;
    const isSelected = pathname.startsWith(url);

    return (
        <li>
            <a
                href={url}
                className={cn(
                    "flex items-center rounded-lg border border-transparent p-2 text-base font-normal transition ease-in-out",
                    isSelected
                        ? "text-indigo-500 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700 focus:bg-indigo-100"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100"
                )}>
                <FontAwesomeIcon
                    icon={icon}
                    className="h-4 w-4 px-2"
                />
                <span className="ml-2">{title}</span>
            </a>
        </li>
    );
};

export default SidebarItem;
