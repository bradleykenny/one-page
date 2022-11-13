import useApi from "@src/hooks/useApi";
import { navigationItems } from "config/NavBar";
import { useRouter } from "next/router";
import MagicButton from "../MagicButton";
import NavLink from "./NavLink";
import NavProfile from "./NavProfile";

interface Props {
    activeTab: string;
}

const NavBar = (props: Props) => {
    const { activeTab } = props;

    const router = useRouter();

    const isActive = (name: string) => {
        return activeTab === name;
    };

    const handleMagicButtonClick = async () => {
        const response = await useApi("/page/", "POST", {
            title: "",
            content: "",
        });
        const { id } = response.data;
        router.push(`/page/${id}/edit`);
    };

    return (
        <div className="fixed top-0 pt-4 left-10 right-10 z-10 bg-gray-200">
            <div className="bg-white px-10 py-4 border-b border-gray-100 rounded-lg shadow box-border">
                <p className="text-orange-400 text-xl font-black inline-block mr-8 cursor-pointer decoration-solid">
                    one:page
                </p>
                {navigationItems.map((navItem) => (
                    <NavLink
                        title={navItem.title}
                        link={navItem.link}
                        isSelected={isActive(navItem.title)}
                    />
                ))}
                <MagicButton title="Create" onClick={handleMagicButtonClick} />
                <NavProfile title="Brad Kenny" />
            </div>
        </div>
    );
};

export default NavBar;
