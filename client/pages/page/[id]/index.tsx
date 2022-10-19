import MarkdownCard from "@src/components/MarkdownCard";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import usePage from "@src/hooks/usePage";
import { useRouter } from "next/router";
import { mdSample1 } from "test/markdown-content";

const Page = () => {
    const router = useRouter();
    const queryId = router.query?.id;

    const { result } = usePage(queryId as string);

    const { content, id, title } = result;
    const parsedText = content?.replace("\\n", "\n");

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="pt-32 pb-12">
                <MarkdownCard
                    title={title}
                    id={id}
                    markdown={parsedText || mdSample1("Soph")}
                />
            </div>
            <SidebarInfo />
        </div>
    );
};

export default Page;
