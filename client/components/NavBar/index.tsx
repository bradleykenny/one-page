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
        <div className="w-full bg-white px-10 py-4 drop-shadow fixed z-10">
            <p className="text-orange-400 text-xl font-black inline-block pr-8">
                one:page
            </p>
            <NavLink title="Home" isSelected={isActive("home")} link="/home" />
            <NavLink title="Projects" isSelected={isActive("projects")} />
            <NavLink title="Resources" />
            <NavLink title="Trending" />
            <NavLink title="Analytics" />
            <NavProfile title="Brad Kenny" />
        </div>
    );
};

export default NavBar;
