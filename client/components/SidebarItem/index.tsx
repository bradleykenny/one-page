import { useRouter } from "next/router";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                    "flex items-center rounded-lg border border-transparent p-2 text-base font-normal transition ease-in-out hover:bg-gray-100",
                    isSelected
                        ? "text-indigo-500 hover:text-indigo-700 focus:bg-indigo-100"
                        : "text-gray-600 hover:text-gray-800 focus:bg-gray-100"
                )}>
                <FontAwesomeIcon
                    icon={icon}
                    className="h-[20px] w-[20px] px-2"
                />
                <span className="ml-2">{title}</span>
            </a>
        </li>
    );
};

export default SidebarItem;
