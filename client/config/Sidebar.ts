import {
    faChartLine,
    faCog,
    faComment,
    faCube,
    faCubes,
    faDatabase,
    faFile,
    faFolder,
    faHome,
    faPaperPlane,
    faSearch,
    faWandMagicSparkles,
    IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface SideBarItem {
    title: string;
    link: string;
    icon: IconDefinition;
}

export const sideBarItems: SideBarItem[] = [
    {
        title: "Home",
        link: "/home",
        icon: faHome,
    },
    {
        title: "Search",
        link: "/search",
        icon: faSearch,
    },
    {
        title: "Pages",
        link: "/pages",
        icon: faFile,
    },
    {
        title: "Projects",
        link: "/projects",
        icon: faCube,
    },
    {
        title: "Templates",
        link: "/templates",
        icon: faWandMagicSparkles,
    },
    {
        title: "Resources",
        link: "/resources",
        icon: faDatabase,
    },
    {
        title: "Responses",
        link: "/responses",
        icon: faComment,
    },
    {
        title: "Email",
        link: "/email",
        icon: faPaperPlane,
    },
    {
        title: "Analytics",
        link: "/analytics",
        icon: faChartLine,
    },
    {
        title: "Settings",
        link: "/settings",
        icon: faCog,
    },
];
