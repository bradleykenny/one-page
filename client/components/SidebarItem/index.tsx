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
                className="flex items-center p-2 mx-2 text-base font-normal text-gray-600 hover:text-gray-800 rounded-xl hover:bg-indigo-100 focus:bg-indigo-200 hover:border-indigo-200 border-transparent border transition ease-in-out hover:shadow">
                <img src={svg} style={{ height: 20, width: 20 }} />
                <span className="ml-3">{title}</span>
            </a>
        </li>
    );
};

export default SidebarItem;
