import MagicButton from "@src/components/MagicButton";
import NavLink from "@src/components/NavBar/NavLink";
import NavProfile from "@src/components/NavBar/NavProfile";
import { navigationItems } from "config/NavBar";
import { useRouter } from "next/router";

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
        router.push("/pages/new");
    };

    return (
        <nav className="fixed top-0 pt-4 left-4 right-4 z-20 bg-gray-200">
            <div className="bg-white px-10 py-4 rounded-lg shadow box-border flex">
                <a
                    href="/home"
                    className="text-orange-400 hover:text-orange-500 text-xl font-black inline-block mr-8 cursor-pointer decoration-solid"
                >
                    one:page
                </a>
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
        </nav>
    );
};

export default NavBar;
