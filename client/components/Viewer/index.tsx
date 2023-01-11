import { useEffect } from "react";
import { EditorContent } from "@tiptap/react";
import { PageResponse } from "models/Page";
import useEditor from "@src/hooks/useEditor";

interface Props {
    page: PageResponse;
}

const Viewer = (props: Props) => {
    const { page } = props;

    const title = page?.title;
    const content = page?.content;

    const editor = useEditor(content, true);

    useEffect(() => {
        try {
            editor?.commands.setContent(content);
        } catch (e) {
            console.error(e);
        }
    }, [content]);

    return (
        <div className="mx-auto h-screen">
            <div className="bg-white shadow rounded-md pt-1 pb-1 mt-16">
                <div className="w-full">
                    <div className="m-4 mb-0">
                        <h2 className="bg-white py-2 px-3 rounded-md text-4xl w-full text-indigo-700 font-black mb-1 border-none">
                            {title}
                        </h2>
                    </div>
                </div>
                <EditorContent editor={editor} />
            </div>
        </div>
    );
};

export default Viewer;
