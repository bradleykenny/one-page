import { faChartLine, faDatabase, faDiagramProject, faFile, faHome, IconDefinition } from "@fortawesome/free-solid-svg-icons";

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
        title: "Pages",
        link: "/pages",
        icon: faFile
    },
    {
        title: "Projects",
        link: "/projects",
        icon: faDiagramProject
    },
    {
        title: "Resources",
        link: "/resources",
        icon: faDatabase
    },
    {
        title: "Analytics",
        link: "/analytics",
        icon: faChartLine
    }
];
