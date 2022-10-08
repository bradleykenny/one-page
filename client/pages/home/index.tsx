import MarkdownCard from "@src/components/MarkdownCard";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import useAllPages from "@src/hooks/useAllPages";
import { mdSample1 } from "test/markdown-content";

const Page = () => {
    const { result } = useAllPages();
    console.log("res", result);
    const parsedText = result.replace("\\n", "\n");

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="pt-32 pb-12">
                <MarkdownCard markdown={parsedText || mdSample1("Soph")} />
            </div>
            <SidebarInfo />
        </div>
    );
};

export default Page;
