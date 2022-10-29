import { navigationItems } from "config/NavBar";
import NavLink from "./NavLink";
import NavProfile from "./NavProfile";

interface Props {
    activeTab: string;
}

const NavBar = (props: Props) => {
    const { activeTab } = props;

    const isActive = (name: string) => {
        return activeTab === name;
    };

    return (
        <div className="fixed top-0 pt-4 left-10 right-10 z-10 bg-gray-100">
            <div className="bg-white px-10 py-4 border-b border-gray-100 rounded-lg shadow box-border">
                <p className="text-orange-400 text-xl font-black inline-block pr-8">
                    one:page
                </p>
                {navigationItems.map((navItem) => (
                    <NavLink
                        title={navItem.title}
                        link={navItem.link}
                        isSelected={isActive(navItem.title)}
                    />
                ))}
                <NavProfile title="Brad Kenny" />
            </div>
        </div>
    );
};

export default NavBar;
