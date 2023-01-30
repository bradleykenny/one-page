import { navigationItems } from "config/NavBar";
import { useRouter } from "next/router";

import MagicButton from "@src/components/MagicButton";
import NavLink from "@src/components/NavBar/NavLink";
import NavProfile from "@src/components/NavBar/NavProfile";

import Input from "../Input";

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
        <nav className="fixed top-0 left-4 right-4 z-20 bg-gray-200 pt-4">
            <div className="box-border flex rounded-lg bg-white px-10 py-4 shadow">
                <a
                    href="/home"
                    className="mr-8 inline-block cursor-pointer text-xl font-black text-orange-400 decoration-solid hover:text-orange-500">
                    one:page
                </a>
                <MagicButton title="Create" onClick={handleMagicButtonClick} />
                <NavProfile title="Brad Kenny" />
            </div>
        </nav>
    );
};

export default NavBar;
