import { useState } from "react";
import NavLink from "./NavLink";
import NavProfile from "./NavProfile";

interface Props {}

const NavBar = (props: Props) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white px-10 py-4 drop-shadow fixed z-10">
            <p className="text-orange-400 text-xl font-black inline-block pr-8">
                one:page
            </p>
            <NavLink title="Home" link="/home" />
            <NavLink title="Projects" isSelected />
            <NavLink title="Resources" />
            <NavLink title="Trending" />
            <NavLink title="Analytics" />
            <NavProfile title="Brad Kenny" />
        </div>
    );
};

export default NavBar;
