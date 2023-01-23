import { faHashtag, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SidebarItemProps {
    title: string;
    url: string;
    icon: IconDefinition;
}

const SidebarItem = (props: SidebarItemProps) => {
    const { icon, title, url } = props;

    return (
        <li>
            <a
                href={url}
                className="flex items-center rounded-lg border border-transparent p-2 text-base font-normal text-gray-600 transition ease-in-out hover:border-indigo-200 hover:bg-indigo-50 hover:text-gray-800 hover:shadow focus:border-indigo-200 focus:bg-indigo-100"
            >
                <FontAwesomeIcon
                    icon={icon}
                    className="h-[20px] w-[20px] text-slate-400"
                />
                <span className="ml-4">{title}</span>
            </a>
        </li>
    );
};

export default SidebarItem;
