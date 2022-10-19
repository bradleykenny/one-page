import MarkdownCard from "@src/components/MarkdownCard";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import useAllPages from "@src/hooks/useAllPages";
import { mdSample1 } from "test/markdown-content";

const Page = () => {
    const { result } = useAllPages();

    const markdownCards = result?.map((item) => {
        const { content, id, title } = item;
        const parsedText = content?.replace("\\n", "\n");
        return (
            <div className="mb-8">
                <MarkdownCard
                    id={id}
                    title={title}
                    markdown={parsedText || mdSample1("Soph")}
                />
            </div>
        );
    });

    return (
        <div>
            <Navbar activeTab="home" />
            <Sidebar />
            <div className="pt-32 pb-12">{markdownCards}</div>
            <SidebarInfo />
        </div>
    );
};

export default Page;
