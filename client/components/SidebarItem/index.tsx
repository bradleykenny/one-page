import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export enum SidebarIcon {
    hashtag = "hashtag",
}

interface SidebarItemProps {
    title: string;
    url: string;
    icon: SidebarIcon;
}

const determineSvg = (icon: SidebarIcon) => {
    switch (icon) {
        case SidebarIcon.hashtag:
            return "/svg/hashtag-solid.svg";
        default:
            return "";
    }
};

const SidebarItem = (props: SidebarItemProps) => {
    const { icon, title, url } = props;

    const svg = determineSvg(icon);

    return (
        <li>
            <a
                href={url}
                className="flex items-center p-2 text-base font-normal text-gray-600 hover:text-gray-800 rounded-lg hover:bg-indigo-100 focus:bg-indigo-200 hover:border-indigo-200 border-transparent border transition ease-in-out hover:shadow">
                <FontAwesomeIcon
                    icon={faHashtag}
                    className="h-[20px] w-[20px] text-indigo-500"
                />
                <span className="ml-3">{title}</span>
            </a>
        </li>
    );
};

export default SidebarItem;
