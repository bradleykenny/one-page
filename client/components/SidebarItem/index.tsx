import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
            <Link
                href={url}
                className={cn(
                    "flex items-center rounded-lg border border-transparent p-2 text-base font-normal transition ease-in-out hover:cursor-pointer",
                    isSelected
                        ? "bg-primary-100 text-primary-600 hover:bg-primary-200 hover:text-primary-700 focus:bg-primary-100"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100"
                )}>
                <FontAwesomeIcon icon={icon} className="h-4 w-4 px-2" />
                <span className="ml-2">{title}</span>
            </Link>
        </li>
    );
};

export default SidebarItem;
