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
            <div className="mt-16 rounded-md bg-white pt-1 pb-1 shadow">
                <div className="w-full">
                    <div className="m-4 mb-0">
                        <h2 className="mb-1 w-full rounded-md border-none bg-white py-2 px-3 text-4xl font-black text-indigo-700">
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
