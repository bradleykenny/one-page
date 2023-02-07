import { Unbounded } from "@next/font/google";
import { useRouter } from "next/router";
import { cn } from "utils";

import MagicButton from "@src/components/MagicButton";
import NavProfile from "@src/components/NavBar/NavProfile";

const unbounded = Unbounded({ weight: "700", subsets: ["latin"] });

interface Props {}

const NavBar = (props: Props) => {
    const router = useRouter();

    const handleMagicButtonClick = async () => {
        router.push("/pages/new");
    };

    return (
        <nav className="fixed top-0 left-4 right-4 z-20 bg-gray-200 pt-4">
            <div className="box-border flex rounded-lg bg-white px-10 py-4 shadow">
                <a
                    href="/home"
                    className={cn(
                        "mr-8 inline-block cursor-pointer text-xl font-black text-orange-400 decoration-solid hover:text-orange-500",
                        unbounded.className
                    )}>
                    one<span className="text-indigo-500">:</span>page
                </a>
                <MagicButton title="Create" onClick={handleMagicButtonClick} />
                <NavProfile title="Brad Kenny" />
            </div>
        </nav>
    );
};

export default NavBar;
